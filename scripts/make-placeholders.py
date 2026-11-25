"""Generate placeholder images for every photo slot in the site.

The Claude Design handoff referenced its photos by blob ID and the binaries
were not part of the exported bundle. This script fills public/images/ with
on-brand placeholders at the expected file names so the site builds and lays
out correctly. Replace each file with the real photo (same name) — see
ASSETS.md. Existing files are never overwritten unless --force is passed.

Usage: python3 scripts/make-placeholders.py [--force]
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parent.parent / "public" / "images"

GUM_900 = (20, 38, 25)
GUM_800 = (31, 59, 42)
GUM_600 = (56, 97, 72)
GUM_400 = (107, 151, 122)
WATTLE_500 = (242, 174, 20)
SAND_50 = (251, 249, 244)

# file name -> (width, height, label)
PHOTOS = {
    "hero-backyard.jpg": (2400, 1350, "Hero - lush backyard garden"),
    "cta-backyard.jpg": (2400, 1350, "CTA - landscaped backyard"),
    "project-courtyard.jpg": (1200, 1500, "Real project - courtyard transformation"),
    "project-feature-plant.jpg": (1200, 900, "Real project - feature plant in rust pot"),
    "service-hardscaping.jpg": (1200, 900, "Hardscaping - curved stone steps"),
    "service-landscape-design.jpg": (1200, 900, "Landscape design - curved path & hedges"),
    "service-installations.jpg": (1200, 900, "Installations - wheelbarrow on site"),
    "service-maintenance.jpg": (1200, 900, "Maintenance - pruning a shrub"),
    "service-retaining-walls.jpg": (1200, 900, "Retaining walls - block wall"),
    "service-walkway.jpg": (1200, 900, "Walkway - stepping stones & ferns"),
    "service-irrigation.jpg": (1200, 900, "Irrigation - drip line"),
    "service-compacted-surfaces.jpg": (1200, 900, "Compacted surfaces - gravel path"),
    "service-raised-beds.jpg": (1200, 900, "Raised garden beds - timber bed"),
    "service-turf.jpg": (1200, 900, "Turf - laying instant turf"),
    "work-new-build.jpg": (1200, 900, "New-build front yard"),
    "work-entertaining.jpg": (1200, 900, "Entertaining area"),
    "work-lawn.jpg": (1200, 900, "Lawns & irrigation"),
    "work-outdoor-living.jpg": (1600, 800, "Outdoor living - circular patio"),
    "work-garden-makeover.jpg": (1600, 800, "Garden makeover - gravel path"),
    "why-young-plants.jpg": (900, 1200, "Young plants in pots"),
    "why-planting.jpg": (900, 1200, "Planting a seedling"),
    "blog-banksia.jpg": (1200, 750, "Blog - banksia flower"),
    "blog-sprinkler.jpg": (1200, 750, "Blog - garden sprinkler"),
    "blog-lettuce.jpg": (1200, 750, "Blog - lettuce in raised bed"),
}


def font(size):
    try:
        return ImageFont.load_default(size=size)
    except TypeError:  # Pillow < 10.1
        return ImageFont.load_default()


def gradient(w, h, top, bottom):
    img = Image.new("RGB", (w, h), top)
    draw = ImageDraw.Draw(img)
    for y in range(h):
        t = y / max(h - 1, 1)
        draw.line([(0, y), (w, y)], fill=tuple(round(a + (b - a) * t) for a, b in zip(top, bottom)))
    return img


def leaf(draw, cx, cy, r, fill):
    draw.ellipse([cx - r, cy - r * 0.55, cx + r, cy + r * 0.55], fill=fill)
    draw.line([(cx - r * 1.1, cy), (cx + r * 0.9, cy)], fill=GUM_900, width=max(2, r // 10))


def photo(name, w, h, label):
    img = gradient(w, h, GUM_400, GUM_800)
    draw = ImageDraw.Draw(img)
    m = min(w, h)
    # soft rolling "hills"
    for i, col in enumerate([GUM_600, GUM_800, GUM_900]):
        top = h * (0.55 + i * 0.13)
        draw.ellipse([-w * 0.3 + i * w * 0.25, top, w * 1.0 + i * w * 0.2, top + h], fill=col)
    # Wide background images sit behind left-aligned copy: keep the label right
    cx = int(w * 0.75) if w / h > 1.6 else w // 2
    leaf(draw, cx, int(h * 0.36), m // 10, WATTLE_500)
    f = font(max(18, m // 22))
    small = font(max(14, m // 34))
    tw = draw.textlength(label, font=f)
    draw.text((cx - tw / 2, h * 0.36 + m // 7), label, font=f, fill=SAND_50)
    note = f"Placeholder - replace public/images/{name}"
    nw = draw.textlength(note, font=small)
    draw.text((cx - nw / 2, h * 0.36 + m // 7 + m // 14), note, font=small, fill=(223, 234, 226))
    img.save(OUT / name, "JPEG", quality=72, optimize=True, progressive=True)


def logo_mark(size=96):
    img = Image.new("RGB", (size, size), GUM_800)
    draw = ImageDraw.Draw(img)
    leaf(draw, size // 2, size // 2, size // 3, WATTLE_500)
    img.save(OUT / "logo-mark.png", optimize=True)


def logo_full(size=320):
    img = Image.new("RGB", (size, size), SAND_50)
    draw = ImageDraw.Draw(img)
    leaf(draw, size // 2, int(size * 0.36), size // 6, GUM_800)
    for text, f, y, col in [
        ("NATIVOGARDENS", font(size // 13), 0.62, GUM_800),
        ("transforming your outdoor experience", font(size // 24), 0.74, GUM_600),
    ]:
        tw = draw.textlength(text, font=f)
        draw.text(((size - tw) / 2, size * y), text, font=f, fill=col)
    img.save(OUT / "logo-full.png", optimize=True)


def main():
    force = "--force" in sys.argv
    OUT.mkdir(parents=True, exist_ok=True)
    jobs = {n: (lambda n=n, a=a: photo(n, *a)) for n, a in PHOTOS.items()}
    jobs["logo-mark.png"] = logo_mark
    jobs["logo-full.png"] = logo_full
    for name, job in jobs.items():
        if (OUT / name).exists() and not force:
            print(f"skip   {name} (exists)")
            continue
        job()
        print(f"wrote  {name}")


if __name__ == "__main__":
    main()
