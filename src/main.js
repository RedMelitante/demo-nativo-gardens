const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '';

/* ---------------------------------------------------------------
 * Sticky header: add a shadow once the page has scrolled
 * ------------------------------------------------------------- */
function initHeaderShadow() {
  const header = document.getElementById('site-header');
  if (!header) return;
  const update = () => header.classList.toggle('shadow-md', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* ---------------------------------------------------------------
 * Mobile menu
 * ------------------------------------------------------------- */
function initMobileMenu() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('icon-open');
  const iconClose = document.getElementById('icon-close');
  if (!btn || !menu) return;

  const setOpen = (open) => {
    menu.classList.toggle('hidden', !open);
    iconOpen?.classList.toggle('hidden', open);
    iconClose?.classList.toggle('hidden', !open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('.mobile-link').forEach((link) => link.addEventListener('click', () => setOpen(false)));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      btn.focus();
    }
  });

  // Close if the viewport grows to the desktop nav breakpoint (lg)
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}

/* ---------------------------------------------------------------
 * Quote form
 * ------------------------------------------------------------- */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function initQuoteForm() {
  const form = document.getElementById('quote-form');
  const error = document.getElementById('form-error');
  const success = document.getElementById('form-success');
  const successName = document.getElementById('success-name');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const defaultErrorText = error?.textContent || '';
  const required = ['name', 'phone', 'email', 'suburb', 'service'];

  const isValid = (field) => {
    const value = field.value.trim();
    if (!value) return false;
    if (field.name === 'email') return EMAIL_RE.test(value);
    if (field.name === 'phone') return value.replace(/\D/g, '').length >= 8;
    return true;
  };

  const validate = () => {
    let firstInvalid = null;
    required.forEach((name) => {
      const field = form.elements[name];
      const ok = isValid(field);
      field.setAttribute('aria-invalid', String(!ok));
      if (!ok && !firstInvalid) firstInvalid = field;
    });
    return firstInvalid;
  };

  // Clear a field's error state as soon as it becomes valid
  form.addEventListener('input', (e) => {
    const field = e.target;
    if (field.getAttribute('aria-invalid') === 'true' && isValid(field)) {
      field.setAttribute('aria-invalid', 'false');
      if (!form.querySelector('[aria-invalid="true"]')) error?.classList.add('hidden');
    }
  });

  const showSuccess = (name) => {
    const firstName = name.split(/\s+/)[0];
    if (successName && firstName) successName.textContent = firstName;
    form.classList.add('hidden');
    success?.classList.remove('hidden');
    success?.focus();
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const firstInvalid = validate();
    if (firstInvalid) {
      if (error) {
        error.textContent = defaultErrorText;
        error.classList.remove('hidden');
      }
      firstInvalid.focus();
      return;
    }
    error?.classList.add('hidden');

    const data = Object.fromEntries(new FormData(form).entries());

    if (!FORM_ENDPOINT) {
      // No endpoint configured (demo mode): show the confirmation only.
      console.info('[Nativo Gardens] VITE_FORM_ENDPOINT is not set – quote request not sent.', data);
      showSuccess(data.name);
      return;
    }

    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      showSuccess(data.name);
    } catch (err) {
      console.error('[Nativo Gardens] Quote request failed', err);
      if (error) {
        error.textContent = "Sorry, we couldn't send your request. Please call 0481 778 114 or WhatsApp us instead.";
        error.classList.remove('hidden');
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });
}

/* ---------------------------------------------------------------
 * Footer year
 * ------------------------------------------------------------- */
function initYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
}

initHeaderShadow();
initMobileMenu();
initQuoteForm();
initYear();
