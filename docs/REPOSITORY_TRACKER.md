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
| 1 | `Fyp-Autismart` | Final/public FYP flagship | **ACTIVE** | Runtime verification; security/deployment verification |
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

## Recent Completed Work

### Fyp-Autismart

- Removed personal/internal planning documentation from the public repository.
- Removed MongoDB URI exposure from backend connection-error logging.
- Verified the backend now reports only whether the URI is set and does not print the credential/URI value.
- Verified `.env`-based configuration is still loaded before service initialization.

Latest security fix commit: `030f5f44c25629019a697b4a9431e14040e674bb`.

## Remaining Meaningful Work

1. Finish only the genuinely pending `Fyp-Autismart` runtime/deployment verification.
2. Keep the 3D portfolio on HOLD until the repository audit is finished and there is enough time to redesign it properly.
3. Do the final GitHub profile repository update only after this tracker/archive is stable.
4. Treat small practice repositories as completed supporting evidence; do not spend portfolio time polishing them further.
5. Update this tracker whenever a repository's status changes.

## Maintenance Rule

Before working on any repository, check this file first. If it is already marked **DONE**, **DOCUMENTED**, or **FROZEN**, do not repeat the same work unless there is a new concrete reason.
