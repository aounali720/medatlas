# MedAtlas integration review — 31 October 2026

## Scope

Reviewed the static GitHub Pages architecture, navigation and global search integration, study-library entry links, anatomy UI and organ-frame bridge, source attribution and automated regression coverage. Added the Ward Desk supplementary revision library.

## Issues and changes

| Area | Finding | Change | Verification |
| --- | --- | --- | --- |
| Anatomy selection | Parent page could send an organ selection before the Three.js module registered its listener | Child sends `MEDATLAS_READY`; parent resends selected organ to the current same-origin frame | Automated source/route assertions; real remote 3D execution not independently verified |
| Asynchronous anatomy focus | Multiple quick organ selections could let an older download focus the wrong mesh | Monotonic focus request token ignores stale completion | Static logic review and syntax validation |
| Anatomy downloads | External mesh hosts/decoders could stall without an application-level timeout | Per-host 18-second timeout, failover host and explicit visible error | Static checks; no production bandwidth verification |
| Viewer incompatibility | A missing module or WebGL support left the central viewer visually empty | Noninteractive labelled 2D compatibility illustration and source-viewer link | HTML/DOM structural checks; cannot test full GPU rendering in this environment |
| Layer presets | Ten systems were requested sequentially, making full-body selection especially slow | Load uncached systems two at a time | Static control-flow checks |
| Search results | 75-result cap displayed misleading total | Count all matches and separately show first 75 | Code assertion |
| Navigation | Left nav slices included internal search route and did not accommodate another study section | Explicit sections; add Ward Desk and hide internal search route | Route smoke suite |
| Clinical references | Original NICE NG51 sepsis guideline has been replaced | New content refers to NG253 for nonpregnant adults, NG254 for under-16s and NG255 for pregnancy-related suspected sepsis | NICE official pages, checked October 2026 |
| Coverage | Existing reference library lacked a consolidated presenting-complaint-focused review section | 63 curated Ward Desk entries, 15 specialties, 30 named sources | Data schema, IDs and search tests |
| Future regressions | No site integration workflow was configured | Node-based multi-route smoke test on push and pull request | GitHub Actions site-quality workflow |

## Reference and safety notes

All new clinical entries provide assessment prompts, investigations, diagnostic pitfalls, escalation signs and primary further-reading links. These are educational synopses; the links do not imply passage-level evidence verification or independent clinician peer review. Current patient management must use up-to-date local protocols, indication-specific drug information, and qualified clinical judgment. The website must not receive identifiable patient data.

Source libraries used include NICE NG253/NG254/NG255 (sepsis), NG250 (pneumonia), NG185 (acute coronary syndromes), NG203/NG148 (renal), NG158 (VTE), NG229 (fetal monitoring), CDC standard precautions, WHO medication safety, and other cited specialty resources.

## Important limitations

- **High-resolution 3D rendering was not verified end-to-end in a production browser.** The anatomy viewer fetches Three.js modules and approximately 3–11 MB GLB system packages from third parties, and these external requests were unavailable from the isolated testing runtime. Code, asset path conventions, error/failover handling and interface were checked; working WebGL hardware and a network connection remain required.
- The 2D compatibility illustration is explicitly labelled and should not be mistaken for a real 3D view.
- The aligned Z-Anatomy data is an educational model, not a diagnostic, morphometric or surgical planning model. Attribution and model limitations are described in `MODEL_ATTRIBUTION.md`.
- A successful GitHub Pages deployment proves files were published, not that an external 3D mesh rendered.
- The new ward content has **not** undergone clinician review or a systematic evidence synthesis.

## Regression check

Run `node tests/integration-smoke.cjs` to verify all site routes, new content schema and references, unified search, and anatomy frame handshake. GitHub Actions also executes this check and JavaScript syntax validation.