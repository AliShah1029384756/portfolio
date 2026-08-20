# Master Repository Tracker

> Working source of truth for the 31 repositories currently visible in the AliShah1029384756 GitHub account.
>
> Purpose: prevent repeated audits and make it obvious what has already been completed, what is intentionally frozen, and what still needs work.

## Status Rules

- **DONE** — meaningful repository improvement/fix completed
- **DOCUMENTED** — repository documented; code intentionally preserved
- **FROZEN** — inspected and no further work currently justified
- **ACTIVE** — meaningful work remains
- **HOLD** — intentionally deferred
- **FINAL** — reserved for final profile/portfolio work
- **HUB** — documentation/index repository rather than a project showcase

## 31-Repository Map

| # | Repository | Role | Current status | Next action |
|---:|---|---|---|---|
| 1 | `Fyp-Autismart` | Final/public FYP flagship | **DOCUMENTATION COMPLETE / VERIFIED** | Freeze; revisit only if deployment/docs change |
| 2 | `AutiSmart` | Personal/experimental FYP version | **HOLD** | Do not mix with final FYP; revisit only if needed |
| 3 | `ClinicOS` | Healthcare/clinic management | **DONE** | Freeze |
| 4 | `SchoolIEP` | Education/IEP platform | **DONE** | Freeze |
| 5 | `EduConnect` | Earlier education/forum/counseling project | **DOCUMENTED** | Freeze; use as historical/supporting evidence |
| 6 | `educore-open-learning-hub` | Public open-learning platform | **DOCUMENTED** | Freeze |
| 7 | `fast-nuces-resources` | FAST-specific resource hub | **DOCUMENTED** | UI polish later; otherwise freeze |
| 8 | `high-impact-student-projects` | Learning/impact content repository | **FROZEN** | Freeze |
| 9 | `high-impact-student-projects-hub` | Public navigation/presentation layer | **FROZEN** | Freeze |
| 10 | `web-dev-learning-track` | Web-development learning material | **DOCUMENTED** | Freeze |
| 11 | `web-dev-learning-hub` | Web-development curriculum hub | **FROZEN** | Freeze |
| 12 | `university-course-projects` | Academic project archive | **FROZEN** | Freeze |
| 13 | `university-course-projects-hub` | Academic archive presentation layer | **FROZEN** | Freeze |
| 14 | `ecommerce-website` | Full-stack e-commerce coursework | **DONE** | Freeze; testing can be future enhancement |
| 15 | `auth-app` | Authentication/testing/CI-CD proof | **DONE** | Freeze unless test verification changes |
| 16 | `bank-testing` | Java/JUnit QA automation | **FROZEN** | Freeze |
| 17 | `p2p-communication-system` | Networking/P2P showcase | **DONE** | Freeze |
| 18 | `compiler-project` | Compiler-design technical proof | **DOCUMENTED** | Freeze; visual/sample-output polish optional |
| 19 | `bus-schedule-optimizer` | Optimization/algorithms project | **FROZEN** | Freeze |
| 20 | `chess-game` | Algorithmic/game project | **DOCUMENTED** | Freeze |
| 21 | `html-practice-project` | HTML practice project | **DOCUMENTED** | Leave alone |
| 22 | `todo-app` | Small frontend practice app | **DOCUMENTED** | Leave alone |
| 23 | `calculator` | Small frontend practice app | **DOCUMENTED** | Leave alone |
| 24 | `notes-app` | Small frontend practice app | **DOCUMENTED** | Leave alone |
| 25 | `expense-tracker` | Small frontend practice app | **DOCUMENTED** | Leave alone |
| 26 | `quiz-app` | Small frontend practice app | **DOCUMENTED** | Leave alone |
| 27 | `weather-app` | Small frontend/API practice app | **DOCUMENTED** | Leave alone |
| 28 | `rest-api` | REST/API practice project | **DOCUMENTED** | Freeze |
| 29 | `AliShah1029384756` | Main GitHub profile repository | **FINAL — LATER** | Update after repository audit is complete |
| 30 | `syed-muhammad-ali-naqvi` | Premium 3D/Vercel portfolio experiment | **HOLD** | Revisit 3D/interactive redesign later |
| 31 | `portfolio` | Long-term documentation archive | **HUB** | Maintain whenever meaningful repository changes occur |

## Locked Relationships

### Final FYP vs personal AutiSmart

- `Fyp-Autismart` = final/public team FYP repository.
- `AutiSmart` = separate personal/experimental version.
- Never merge their identities or attribute experimental work to the final team repository without proof.

### Standalone projects vs academic archive

A project appearing inside `university-course-projects` does not mean it should be modified twice. The standalone repository is the primary technical showcase; the collection is the academic archive.

### FAST resources vs EduCore

- `fast-nuces-resources` = FAST-NUCES-specific student journey/resources.
- `educore-open-learning-hub` = broader public open-learning platform.

### Hubs vs source repositories

- `web-dev-learning-hub` presents the web curriculum; `web-dev-learning-track` contains the learning material.
- `high-impact-student-projects-hub` presents/navigation for `high-impact-student-projects`.
- `university-course-projects-hub` presents/navigation for `university-course-projects`.

## Fyp-Autismart Documentation Record

- Final Year Project developed and presented collaboratively at FAST-NUCES, Chiniot-Faisalabad Campus.
- FYP-I (Semester 7): **A+**.
- FYP-II (Semester 8): **A-**.
- The team deployed and ran the project for the FYP demonstration/presentation.
- Live deployment is documented in the README: `https://auti-smart.vercel.app/`.
- The README now explains that external deployment services/credentials may expire and that original secrets are intentionally not included.
- The README explicitly separates the final team FYP from the author's personal experimental `AutiSmart` repository.
- MongoDB URI exposure was removed from backend connection-error logging.

Latest README documentation commit: `91fa17cc8b6bff8859ad7c98117790349ec4a990`.
Latest security fix commit: `030f5f44c25629019a697b4a9431e14040e674bb`.

## Portfolio Presence Audit — Progress Log (20 Aug 2026)

This section records the work completed during the current public online-presence improvement pass. It is separate from the 31-repository technical status map above because this pass audits the **public identity layer** across the GitHub profile repository, portfolio website, CV, project archive, and public hubs.

### Completed in this pass

1. **Final FYP public-positioning cleanup**
   - Removed public FYP-I/FYP-II grades from the GitHub profile README.
   - Kept the final team FYP identity distinct from the personal/experimental `AutiSmart` repository.
   - Confirmed the website uses public/team-FYP wording rather than public grades.

2. **GitHub profile README positioning**
   - Added/strengthened SchoolIEP as a featured project.
   - Added verified ClinicOS positioning/stack details.
   - Added a direct Complete Project Archive link.
   - Aligned the main profile positioning around Full-Stack Software Engineering, AI-assisted development, Healthcare, and EdTech rather than making Data/BI appear as the primary identity.

3. **CV consistency**
   - Updated the public AutiSmart technology stack to the current documented implementation instead of the stale HTML/CSS/JS wording.
   - Added navigation toward the broader Project Archive.
   - Kept sensitive/private academic details out of public-facing profile material.

4. **Main portfolio website consistency**
   - Updated the Home page AutiSmart stack to match the current public project positioning.
   - Audited the Projects page and confirmed that its 13 cards are curated portfolio entries, not the complete repository inventory.
   - Avoided falsely presenting all 31 GitHub repositories as 31 portfolio projects.

5. **Project archive structure**
   - Added `project-archive.html` as the broader documented-project archive.
   - Expanded the archive beyond the original six supporting projects to include documented academic/supporting work such as Bank Testing, Bus Schedule Optimizer, Calculator, E-commerce Website, Expense Tracker, FAST-NUCES Resource Hub, EduCore, Auth App, P2P, Compiler, Chess, and smaller practice/API projects.
   - Established the intended structure: **Featured Projects = curated recruiter-facing showcase; Project Archive = broader documented work; University Course Projects = academic collection.**

6. **Detailed project case-study consistency**
   - Updated the AutiSmart detailed case study so its technology description matches the current public `Fyp-Autismart` repository rather than the older HTML/CSS/JS stack wording.
   - Cross-checked EduConnect against its repository README and found no change necessary.

7. **No-change decisions recorded mentally during audit**
   - Do not repeatedly modify repositories already marked DONE/DOCUMENTED/FROZEN without a concrete new reason.
   - Do not inflate project counts by counting documentation hubs, profile repositories, and archives as individual portfolio projects.
   - Do not overwrite large website files when the available GitHub connector cannot safely provide the complete current source.

### Current next phase — ACTIVE

**Social Preview / Open Graph Audit** is now the next active workstream.

Problem identified: some public hubs do not provide a dedicated social/link preview image when their URL is shared on LinkedIn, WhatsApp, Facebook, etc. The main portfolio/site preview already has social-image metadata, but at least the University Course Projects Hub currently lacks `og:image` / `twitter:image` metadata.

Next actions:

1. Audit every important standalone public hub for `og:title`, `og:description`, `og:url`, `og:image`, image dimensions, and Twitter/X large-card metadata.
2. Identify which hubs already have suitable preview assets and which need a new branded 1200×630 image.
3. Create a consistent but hub-specific social-preview system rather than reusing one generic image everywhere.
4. Add absolute canonical/preview URLs where required.
5. Ensure the preview image paths are publicly reachable from the deployed GitHub Pages/Vercel site.
6. Verify the metadata after deployment using live page source/preview validators where possible.
7. Then continue the broader cross-page consistency audit: Home, About, Projects, Sites, CV, GitHub README, and public hubs.

### Working rule for the next phase

Do not ask the owner to manually patch every page. Make safe direct changes where the GitHub workflow supports them, verify each resulting commit/file, and only surface a manual step when the tooling genuinely cannot perform the operation safely.

## Remaining Meaningful Work

1. **ACTIVE NOW:** Complete the Social Preview / Open Graph audit and implement missing preview metadata/assets across important public hubs.
2. Finish cross-page consistency checks after the social-preview pass.
3. Keep the 3D portfolio on HOLD until the repository audit is finished and there is enough time to redesign it properly.
4. Do the final GitHub profile repository update only after this tracker/archive is stable.
5. Treat small practice repositories as completed supporting evidence; do not spend portfolio time polishing them further.
6. Update this tracker whenever a repository or public-presence workstream status changes.

## Maintenance Rule

Before working on any repository, check this file first. If it is already marked **DONE**, **DOCUMENTED**, **FROZEN**, or **DOCUMENTATION COMPLETE / VERIFIED**, do not repeat the same work unless there is a new concrete reason.

For the public-presence audit, update the **Portfolio Presence Audit — Progress Log** after each meaningful batch so the next session can resume from a known point without repeating completed work.
