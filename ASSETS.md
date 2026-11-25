# Image assets

The Claude Design handoff (`design/handoff/`) referenced every photo by an internal
blob ID (`/_blob/<id>`). The exported bundle did **not** include the image files, so
`public/images/` currently holds generated, on-brand **placeholders** at the final
file names (made by `npm run images:placeholders`).

To go live, drop each real image into `public/images/` using the file name below
(overwrite the placeholder). No code changes are needed.

Recommended: JPEG/WebP at ~80% quality, at least the listed width. Photos marked
**Sample** carry a "Sample photo" badge in the design (Unsplash demo images); the
rest are real Nativo Gardens assets (logo and project photos) to get from the client.

| File | Content | Sample? | Min size | Design blob ID |
| --- | --- | --- | --- | --- |
| `logo-mark.png` | Logo mark (header, 48×48 @2x = 96×96) | **Real** | 96×96 | `4746b596496645975a28815480cfa17d` |
| `logo-full.png` | Full logo with tagline (footer, 160×160 @2x = 320×320) | **Real** | 320×320 | `23973ea39a506ec70a54745557e3392a` |
| `hero-backyard.jpg` | Hero background – lush backyard garden | Sample | 2400×1350 | `2ebac55a5d74df9dbadd045350ee9676` |
| `project-courtyard.jpg` | Real Nativo project – courtyard transformation | **Real** | 1200×1500 | `e4f72641f074545591fd1f9e3cb95126` |
| `project-feature-plant.jpg` | Real Nativo project – feature plant in rust pot | **Real** | 1200×900 | `1870eb556052942e87632bd6d0d42823` |
| `service-hardscaping.jpg` | Curved stone steps to a paved patio | Sample | 1200×900 | `0627a17141dd5857bbd8abbab00393db` |
| `service-landscape-design.jpg` | Designed garden, curved path, clipped hedges | Sample | 1200×900 | `fde7b362c8be9ecec27e90853536b988` |
| `service-installations.jpg` | Landscaper with wheelbarrow on an install | Sample | 1200×900 | `c32dd22b5d34c2fbcf819d27b9bd6a17` |
| `service-maintenance.jpg` | Gardener pruning a shrub | Sample | 1200×900 | `c3a6a60457616c54cd72a7efbfa82baf` |
| `service-retaining-walls.jpg` | Block retaining wall with planting | Sample | 1200×900 | `46b8577e01cf6eccc46b31fb3e8707b9` |
| `service-walkway.jpg` | Stepping-stone walkway with ferns | Sample | 1200×900 | `bc251d89209ead24e4a5a0bd58457a3f` |
| `service-irrigation.jpg` | Drip irrigation in a garden bed | Sample | 1200×900 | `2b6bd9e689a4a7cdea910548687f25f8` |
| `service-compacted-surfaces.jpg` | Compacted gravel path by stone-edged bed | Sample | 1200×900 | `6ef17783a4eaa2a1a60e2157440c3b2f` |
| `service-raised-beds.jpg` | Timber raised garden bed | Sample | 1200×900 | `24013dcb0dbe47f872f65a36bc30d0b9` |
| `service-turf.jpg` | Laying a roll of instant turf | Sample | 1200×900 | `fbe0c097d8f41210cfe90d38cbf8d20c` |
| `cta-backyard.jpg` | CTA band background – landscaped backyard | Sample | 2400×1350 | `6ca7b9d6dc3c09bd1cfd636255d1dcb4` |
| `work-new-build.jpg` | Modern home with new front lawn | Sample | 1200×900 | `e7fb5f56f712299b932675ef9f9054a8` |
| `work-entertaining.jpg` | Stone-paved entertaining area | Sample | 1200×900 | `4abb47b2aa582209bd404f6d9e6f4ba0` |
| `work-lawn.jpg` | Newly laid lawn beside a path | Sample | 1200×900 | `81ead3f7953faa360f24af42b35527ca` |
| `work-outdoor-living.jpg` | Circular paved patio with stone wall | Sample | 1600×800 | `5b8250e693e50f50b4abfd04c6c36481` |
| `work-garden-makeover.jpg` | Gravel path between planted borders | Sample | 1600×800 | `53c4f4f04cd81287f3990039ccd7a6cc` |
| `why-young-plants.jpg` | Young plants in pots | Sample | 900×1200 | `6d3b96e75c67fdc0af0c8d98d23783ab` |
| `why-planting.jpg` | Hands planting a seedling | Sample | 900×1200 | `9f213e5a89cdab237b55dc0585b02946` |
| `blog-banksia.jpg` | Banksia flower | Sample | 1200×750 | `7da970633f1cf385baad2211833e2b56` |
| `blog-sprinkler.jpg` | Garden sprinkler | Sample | 1200×750 | `7a6b532f3c69b0347f1b71ba350a270b` |
| `blog-lettuce.jpg` | Lettuce in a raised veggie bed | Sample | 1200×750 | `ea4855fd8e7f2db42b7ac644452210fb` |

`project-courtyard.jpg` is reused in four places (About, Garden design card, Our Work
feature tile) and `project-feature-plant.jpg` in two, exactly as in the design.

If you add the real photos at different file names, update the `src` attributes in
`index.html` (and the `og:image` / preload tags in its `<head>` for the hero).
