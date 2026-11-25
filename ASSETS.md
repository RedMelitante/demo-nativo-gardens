# Image assets

All images live in `public/images/` and come from the design handoff
(`design/handoff/v2/`). The client's master logo file is kept, undeployed, at
`design/brand/nativo-logo.png`.

- **Client** images are real Nativo Gardens assets.
- **Sample** images (`sample-*.jpg`) are Unsplash photos (free licence) for the pitch demo
  only. They show a "Sample photo" badge on the page. Replace each with a client photo,
  using the same file name to avoid code changes, then remove the badge `<span>` next to
  the `<img>` in `index.html`.

| File | Type | Used for | Replace with (from the design notes) |
| --- | --- | --- | --- |
| `logo-mark.png` | Client | Dragonfly logo mark (header) | – |
| `sample-hero-garden.jpg` | Sample | Lush backyard garden with layered planting, lawn and a stone path | Hero – best finished garden (wide, landscape orientation) |
| `courtyard-climber.jpg` | Client | Courtyard garden by Nativo Gardens with a trained climber on the fence and purple flowering perennials below (used 3×) | – |
| `courtyard-feature-plant.jpg` | Client | Feature plant in a rust-finish pot with fresh mulch (used 2×) | – |
| `sample-hardscaping.jpg` | Sample | Curved stone steps leading to a paved patio | Service – Hardscaping |
| `sample-landscape-design.jpg` | Sample | Designed garden with a curved path, clipped hedges and layered planting | Service – Landscape design |
| `sample-landscape-installation.jpg` | Sample | Landscaper moving soil with a wheelbarrow on a garden install | Service – Landscape installations |
| `sample-maintenance.jpg` | Sample | Gardener in gloves pruning a shrub with hand shears | Service – Landscaping maintenance |
| `sample-retaining-wall.jpg` | Sample | Block retaining wall with planting in front | Service – Retaining walls |
| `sample-walkway.jpg` | Sample | Stepping-stone walkway lined with ferns and purple flowers | Service – Walkway landscaping |
| `sample-irrigation.jpg` | Sample | Drip irrigation line watering plants in a garden bed | Service – Irrigation |
| `sample-compacted-surface.jpg` | Sample | Compacted gravel path beside a stone-edged garden bed | Service – Compacted surfaces |
| `sample-raised-bed.jpg` | Sample | Gardener preparing soil in a timber raised garden bed | Service – Raised garden beds |
| `sample-turf.jpg` | Sample | Hands pressing a fresh roll of instant turf into place | Service – Turf installation |
| `sample-cta-backyard.jpg` | Sample | Landscaped backyard with lawn, garden beds and outdoor living area | CTA band – wide garden or outdoor living shot |
| `sample-front-yard.jpg` | Sample | Modern home with a new front lawn and garden | Gallery 3 – Front garden / new build |
| `sample-entertaining-area.jpg` | Sample | Stone-paved entertaining area with lounge chairs beside a lawn | Gallery 4 – Decking |
| `sample-new-lawn.jpg` | Sample | Newly laid lawn beside a concrete path | Gallery 5 – Lawn & turf |
| `sample-paved-patio.jpg` | Sample | Circular paved patio framed by a low stone wall and shrubs | Gallery 6 – Paving / outdoor living |
| `sample-garden-path.jpg` | Sample | Garden makeover with a gravel path between planted borders | Gallery 7 – Garden makeover |
| `sample-potted-plants.jpg` | Sample | Young plants in pots ready for planting | Why us 1 – crew at work / before shot |
| `sample-planting.jpg` | Sample | Hands planting a seedling into a prepared garden bed | Why us 2 – finished detail shot |
| `sample-banksia.jpg` | Sample | Banksia flower, a hardy Australian native | Blog 1 – native plants |
| `sample-sprinkler.jpg` | Sample | Garden sprinkler watering plants | Blog 2 – irrigation |
| `sample-veggie-bed.jpg` | Sample | Lettuce growing in a raised veggie garden bed | Blog 3 – veggie garden |
| `logo-full.png` | Client | Nativo Gardens logo – transforming your outdoor experience | – |

Favicons: `public/favicon.png` (64×64) and `public/apple-touch-icon.png` (192×192), cropped
from the client logo.

Social share image: `og:image` in `index.html` currently points at an absolute URL on the
demo host. Update it to the live domain (ideally a 1200×630 client photo) at launch.
