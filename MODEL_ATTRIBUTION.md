# Anatomy viewer — third-party asset credits

The default anatomy study model is an **offline, self-contained schematic WebGL illustration** (with a 2D compatibility illustration). Users can opt in to externally hosted GLB assets. **The external meshes are not distributed or represented as original MedAtlas artwork.** The browser requires network access to load the optional meshes and their Draco decoder. A timed failure preserves the working offline model.

1. **Optional full skeleton:** [yamz8/human-body-simulator](https://github.com/yamz8/human-body-simulator) `public/models/overview-skeleton.glb`, source commit `e4d76fbb424d15e1364963528a082a78fa359161`. The source project attributes its original skeleton mesh to **Open3Dmodel / Open Anatomy lineage**, licensed **CC BY-SA 4.0**, and notes that the original model has incomplete paired bones requiring runtime mirroring (not performed in the simple MedAtlas viewer). See the source project’s [THIRD_PARTY_NOTICES.md](https://github.com/yamz8/human-body-simulator/blob/main/THIRD_PARTY_NOTICES.md) before reuse.
2. **Organ and body-surface geometry:** BodyParts3D 3.0, © The Database Center for Life Science, adapted and packaged by [yamz8/human-body-simulator](https://github.com/yamz8/human-body-simulator). `public/models/anatomy-organs.glb` and `public/models/anatomy-skin.glb`, source commit `e4d76fbb424d15e1364963528a082a78fa359161`. The derivatives are described by the project as covered by **CC BY-SA 2.1 JP**. Review that project's [THIRD_PARTY_NOTICES.md](https://github.com/yamz8/human-body-simulator/blob/main/THIRD_PARTY_NOTICES.md) before redistributing modified models.
3. **3D web component:** [Google model-viewer](https://modelviewer.dev/) (Apache-2.0) loaded by jsDelivr on supported browsers.

The model files are requested via pinned GitHub asset URLs served by the jsDelivr CDN. Asset copyrights and reuse terms belong to the respective authors and original data licensors; CC BY-SA attribution and share-alike conditions apply to derivative model reuse. This project does not import those models into a proprietary license. No claim is made that all anatomy is complete, anatomist-reviewed, patient-specific or accurate for diagnostic measurement.

The skin, organ and skeleton meshes are **independent educational datasets**; their spatial coordinates are not guaranteed to be congruent. The viewer switches datasets rather than inaccurately merging them. The selection list links explanatory notes and does not imply that individual structures have been identified or isolated in the 3D geometry.

4. **Bundled compatibility diagram:** `assets/anatomy-study.svg` is an original schematic educational illustration for browsers without WebGL. This is not an anatomical mesh, and selecting 3D views while in 2D compatibility mode does not become a true 3D rotation.

**Reliability note:** optional meshes may fail on restricted networks because both `<model-viewer>` and Draco decoding rely on remote modules and because remote asset hosts may restrict/limit requests. MedAtlas never hides its offline viewer while attempting those downloads.

## Primary human body explorer — Écorché

The **default** MedAtlas anatomy page now embeds `anatomy-studio.html`, adapted from the MIT-licensed open-source [Écorché viewer](https://github.com/Charleeh/ecorche). The anatomical model is **CC BY-SA 4.0** and consists of 634 individually named bone, cartilage, teeth and muscle meshes from BodyParts3D and Z-Anatomy. Model geometry is accessed from a pinned upstream GLB via jsDelivr at commit `320805e06aee51e2e6f6b22533eb2a59d43f2d4d`, with a GitHub Pages source fallback. The 6 MB model is not bundled in this repository and requires an internet connection and WebGL.

Mandatory attribution: **Écorché (github.com/Charleeh/ecorche), CC BY-SA 4.0. Based on BodyParts3D, © The Database Center for Life Science, CC BY 4.0, and Z-Anatomy by Gauthier Kervyn, CC BY-SA 4.0.**

See [full upstream credits](https://github.com/Charleeh/ecorche/blob/main/ATTRIBUTION.md), the [MIT source license](https://github.com/Charleeh/ecorche/blob/main/LICENSE.md), and the [original working viewer](https://charleeh.github.io/ecorche/).

This model is an educational adult male anatomical figure; **no internal organs, arteries, veins, nerves or female anatomy** are modeled by this specific mesh. Mesh geometry is simplified and is not appropriate for precise surgical planning, diagnosis or anatomical measurement. The previous procedural sphere-and-rod viewer is not used in the current interface.
