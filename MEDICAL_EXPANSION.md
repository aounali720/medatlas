# Medical Knowledge Bank expansion — 31 October 2026

This expansion adds **673 newly authored high-yield study concepts** spanning ten subject categories, distinct from the pre-existing medical dictionary, casebook, Ward Desk and Clinical Mastery notes. The large collection is paginated and indexed by the site's global search. Users may filter by subject, study level, and keyword, open a teaching note, follow a reference, and mark topics as reviewed (local browser storage).

| Category | New entries |
|---|---:|
| Anatomy | 68 |
| Physiology | 64 |
| Pathology | 65 |
| Microbiology & Immunology | 79 |
| Pharmacology | 76 |
| Diagnostics & Interpretation | 76 |
| Clinical Medicine | 77 |
| Clinical Skills & Procedures | 60 |
| Emergency & Critical Care | 48 |
| Ethics, Safety & Public Health | 60 |
| **Total** | **673** |

## Reference policy

Each entry links to a *topic-appropriate further-reading index*, principally OpenStax Anatomy and Physiology 2e, OpenStax Microbiology, MSD Manual Professional, MedlinePlus Medical Tests, WHO Model Essential Medicines Lists (2025), Stanford Medicine 25, Resuscitation Council UK and WHO Patient Safety. The PubMed search link for the entry title helps the reader find scholarly sources. **These are not verified paragraph-level citations**, and the content has not been independently clinician reviewed. Do not use the summaries as prescribing instructions, diagnosis, treatment protocols, or substitutes for locally approved guidelines.

## Integration and testing

The new `medical-compendium.js` is loaded before the app script; `#/compendium` is included in sidebar navigation, page switching, homepage discovery, global search, and review tracking. New CI checks enforce the count, category coverage, uniqueness of IDs/titles, meaningful factual content, valid reference pointers, and route/search availability. The previous anatomy viewer and existing learning modules are preserved.