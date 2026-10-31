# MedAtlas — interactive medical knowledge website

A complete, responsive **static website** with a learning dashboard, 3D anatomy viewer, clinical knowledge library, medicine reference, medical dictionary, flashcard-style quiz, saved items, and original-source links. All code runs in the browser and does not require npm, a build process, or a backend.

## Contents

- **Overview:** specialty categories, stats, featured knowledge and shortcuts.
- **3D Anatomy Lab:** procedural WebGL anatomy illustration, mouse/touch rotation, zoom, animated breathing/heart, systems toggle, labels and organ explanations. It uses a *simplified illustration*, not a medical-grade anatomical model. Includes 2D fallback when WebGL is not supported.
- **Guidelines & Policies:** searchable educational summaries of common infection prevention, safety, communication, consent, medication and emergency concepts. These do not constitute a facility's legal or clinical policies.
- **Conditions & Care:** selected common conditions and signs that require assessment.
- **Medicine Index:** 60 medicine introductions, drug classes, uses, cautions and links to current official drug references. No individual doses or prescriptions.
- **Clinical Techniques:** high-level assessment and clinical workflow information, not hands-on training for invasive procedures.
- **Medical Dictionary:** 140+ definitions and abbreviations, browse by letter.
- **Learning Studio:** 48 quiz questions, feedback, sources and score.
- **Saved Library:** bookmarks and read status stored in this browser only.
- **Sources & About:** WHO, CDC, AHA, AHRQ, MedlinePlus, FDA, OpenStax and Merck references.

## Run locally

**Quick:** open `index.html` in a modern browser.

**Recommended (Windows):** double-click `run-local.bat`. Alternatively in PowerShell:

```powershell
cd path\to\medatlas-site
py -m http.server 8000
```

Then open http://localhost:8000.

**macOS/Linux:**

```bash
cd medatlas-site
python3 -m http.server 8000
```

## Publish using GitHub Pages

1. The project is hosted in the public `aounali720/medatlas` repository.
2. Files are published at the repository root, with `index.html` as the entry point.
3. In GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` and `/ (root)`.
4. Visit `https://aounali720.github.io/medatlas/` after deployment completes. The website uses relative asset paths and supports this subdirectory.

## File structure

```
medatlas-site/
  index.html         site entry
  styles.css         responsive visual design
  app.js             application UI, search, bookmarks, quizzes
  atlas-expansion.js  clinical revision, cases, investigations, study pathways and glossary extension
  specialist-data.js  specialty diagnostic patterns, OSCEs and clinical revision
  clinical-mastery.js  structured clinical reasoning chapters and source links
  assets/anatomy-study.svg  schematic 2D fallback illustration
  MODEL_ATTRIBUTION.md  optional anatomical model credits
  data.js            article, medicine, dictionary, quiz, reference data
  anatomy.js         native WebGL 3D scene with 2D fallback
  assets/favicon.svg favicon
  run-local.bat       Windows local server
  run-local.sh        macOS/Linux local server
```

## Editorial and safety notes

- **Educational demonstration only.** Not a clinical decision-support system, medical device, personal treatment plan, formulary, hospital policy, certification course or substitute for a licensed health professional.
- Contents are *curated examples*, not a complete inventory of every medical practice, policy, term, technique or medicine.
- Check current local laws, clinical guidelines, local formularies, product-specific instructions, contraindications, interactions, age restrictions, and actual patient circumstances before any use in clinical care.
- No medication dosing or step-by-step invasive procedure instructions are presented. To learn procedures safely, use accredited supervised clinical training.
- The diagram is not anatomically exact or useful for diagnostics.
- For medical emergencies, call local emergency services immediately, not this website.
- The site operates offline except external reference links, which require internet access. It has no trackers or external dependencies.
- Bookmarks and read status use `localStorage` on the current browser; no personal health or patient data should be entered.
- Data was drafted October 2026. Sources may update and this website does not check them in real time.

## Extending the content

The `window.MED_DATA` object in `data.js` contains `articles`, `medicines`, `glossary`, `anatomy`, `quiz`, `categories`, `sources`. Add new entries using the existing object format and link material to relevant reputable references. Review content with domain-qualified professionals before any public-facing clinical deployment.

## Clinical revision expansion

MedAtlas now includes six learning paths, 162 topic summaries (from cell physiology to core medical specialties), 40 investigation reference cards, 30 fictional clinical cases, and 48 multiple-choice questions. The expanded library includes patient-safety alerts, interpretation pitfalls, reading progress, bookmarking, and search across the extended materials.

The content is designed as a **learning guide**, not a complete medical textbook, validated hospital guideline, or medical decision support tool. Summaries are original educational overviews, not verbatim extracts or endorsements from the organizations linked. Individual topic references point to authoritative **reference hubs**, not necessarily to a specific supporting passage. Medication choices, doses, test cutoffs, antimicrobial protocols, emergency care, immunization schedules, and clinical decisions require a licensed professional, local protocol and the latest primary guideline. This website does not receive real-time guideline updates or maintain clinician-reviewed editorial sign-off.

Source shelf: OpenStax Anatomy & Physiology, MSD Manual Professional, NICE guidance, MedlinePlus Medical Tests and Drug Information, Stanford Medicine 25, Resuscitation Council UK, AHA 2025 CPR/ECC guidance, WHO patient safety and essential medicines, KDIGO kidney guidelines, CDC infection control and sepsis guidance, and the Drug Regulatory Authority of Pakistan. Sources and original publication dates should be checked before clinical use.

The site is static and runs offline after loading if it has been cached or copied locally, except outbound references, which require connectivity. Bookmarks and topic reading progress are stored solely in your browser's local storage. Do not enter identifiable patient data.

The medical dictionary also includes 174 new definitions, including vital-sign language, investigations, pharmacology, and examination abbreviations.

## Specialist Desk and anatomical reference viewer

The Specialist Desk contains 82 focused clinical reasoning topics, 34 investigation patterns, 20 OSCE/bedside revision checklists and 29 curated reference links. It is organized by specialty with live filtering, search, details, review progress, and printable notes. The entries are independently written study prompts, not care protocols or expert-verified clinical recommendations. Sources are labeled as further reading, not line-by-line endorsements.

The anatomy studio now **starts reliably in a self-contained WebGL study mode** (with an explicitly schematic 2D compatibility diagram on browsers without WebGL). Rotate, pan between standard views, change layers, zoom, or use keyboard arrows and +/−. An optional **Load detailed anatomical mesh** control requests externally hosted sourced models. Those meshes require internet access, a functioning model-viewer module, Draco decoder and WebGL; loading is not guaranteed on restricted networks. Mesh loading failures preserve the interactive offline view. See [MODEL_ATTRIBUTION.md](MODEL_ATTRIBUTION.md) for provenance, CC BY-SA conditions and limitations. The 3D content has not undergone independent specialist validation.

Clinical editorial checkpoint: review medical notes with subject-matter experts, link exact recommendation passages where clinical claims are used, maintain a version/audit trail, and localize medicines, emergency pathways and laboratory reference ranges before clinical use.

## October 2026 — clinical mastery and anatomy reliability update

- Adds **64 distinct clinical-reasoning chapters** across cardiovascular, respiratory, renal, endocrine, neurologic, gastrointestinal, hematologic, infectious, emergency, obstetric, pediatric, surgical, medication safety and professional practice domains. Each opens a structured educational note: mechanisms, focused assessment, investigations, diagnostic trap, urgent warning features and a relevant primary reading link. Chapters include filtering, search, print and reviewed-state tracking in the browser.
- New `clinical-mastery.js` holds the structured content and source metadata. The overview and cross-library search now include these topics.
- Anatomy begins in the bundled interactive offline rendering rather than silently waiting for an external `<model-viewer>` download. A user can explicitly request higher-detail externally hosted GLBs. Loader failures and timeouts are visible and retain a working fallback. The body view controls also rotate the offline WebGL view.
- Adds an original 2D anatomy chart (`assets/anatomy-study.svg`) for environments where WebGL is unavailable. The 2D chart is a compatibility display, **not a functional replacement for anatomically accurate 3D data**. The optional higher-detail meshes have not been independently tested from every user network/device, nor anatomist-certified.
- Source links provide further reading, but **have not been line-by-line verified** by clinicians. This is a study product, not a medical device or bedside decision system.

### Updated anatomy studio
The main 3D anatomy page now hosts `anatomy-studio.html`, adapting the MIT-licensed Écorché renderer and its 634 named skeletal and muscular structures. Users can rotate, zoom, search and directly select structures, toggle muscle/skeleton layers, and adjust superficial-muscle opacity. The anatomical model is © respective licensors under CC BY-SA 4.0 and loaded from external pinned sources. See `MODEL_ATTRIBUTION.md` for full license terms. This model is intended for education only.
