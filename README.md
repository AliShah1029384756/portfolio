# Repository Documentation Archive

> **This repository is now a working documentation archive, not the final personal portfolio.**

This repository stores structured documentation for the projects and GitHub repositories that make up **Syed Muhammad Ali Naqvi's** professional, academic, technical, and educational portfolio.

The goal is simple: **document the work once, then use this archive as the source for future profile, CV, README, LinkedIn, and portfolio updates.**

## Why This Repository Exists

A large portfolio becomes difficult to maintain when every future profile update requires opening and re-understanding every repository.

This archive solves that problem by keeping a per-repository record of:

- What the project is
- Why it exists
- Who it is for
- Main features
- Technology and architecture
- Important modules
- Relationship to other projects
- Changes already made
- Important commits
- Security/privacy considerations
- Current status
- Portfolio value
- What should and should not be changed later

## Documentation Index

| Repository | Documentation |
|---|---|
| AutiSmart / FYP | [`fyp-autismart.md`](docs/repositories/fyp-autismart.md) |
| EduCore | [`educore-open-learning-hub.md`](docs/repositories/educore-open-learning-hub.md) |
| ClinicOS | [`clinicOS.md`](docs/repositories/clinicOS.md) |
| SchoolIEP | [`schoolIEP.md`](docs/repositories/schoolIEP.md) |
| E-commerce | [`ecommerce-website.md`](docs/repositories/ecommerce-website.md) |
| Auth App | [`auth-app.md`](docs/repositories/auth-app.md) |
| P2P Communication | [`p2p-communication-system.md`](docs/repositories/p2p-communication-system.md) |
| Compiler Project | [`compiler-project.md`](docs/repositories/compiler-project.md) |
| Bank Testing | [`bank-testing.md`](docs/repositories/bank-testing.md) |
| University Projects Archive | [`university-course-projects.md`](docs/repositories/university-course-projects.md) |
| Bus Schedule Optimizer | [`bus-schedule-optimizer.md`](docs/repositories/bus-schedule-optimizer.md) |
| FAST-NUCES Resources | [`fast-nuces-resources.md`](docs/repositories/fast-nuces-resources.md) |
| High Impact Student Projects | [`high-impact-student-projects.md`](docs/repositories/high-impact-student-projects.md) |
| Premium 3D Portfolio | [`portfolio-3d.md`](docs/repositories/portfolio-3d.md) |

The archive index and status map are maintained in [`docs/README.md`](docs/README.md).

## Repository Status Model

- **DONE** — meaningful improvement/audit completed
- **DOCUMENTED** — documentation completed; code intentionally preserved
- **FROZEN** — inspected and intentionally left unchanged
- **ACTIVE** — meaningful work remains
- **HOLD** — intentionally deferred
- **FINAL** — final public profile/portfolio work

## Important Portfolio Relationships

Some projects exist both as standalone repositories and inside the university project collection.

That is intentional:

```text
Standalone Repository
        ↓
Primary project showcase

University Course Projects
        ↓
Academic archive / collection
```

The standalone repository should be treated as the primary source for that project. We should not duplicate improvements simply because the same project appears in the collection.

### FAST Resources vs EduCore

These are **not duplicates**:

- `fast-nuces-resources` → FAST-NUCES-specific student journey/resource hub
- `educore-open-learning-hub` → broader public open-learning platform

### AutiSmart vs ClinicOS vs SchoolIEP

These projects share useful domain concepts but remain separate products:

- **AutiSmart** → autism-support + AI + healthcare/therapy platform
- **ClinicOS** → clinic/therapy management workflows
- **SchoolIEP** → education/IEP and student progress workflows

Shared concepts can inform future engineering work, but public descriptions must preserve each project's actual scope.

## Future Profile Workflow

When the final GitHub profile is updated:

1. Read this archive first.
2. Select the strongest projects for the target audience.
3. Reuse only documented, proof-backed facts.
4. Verify anything that may have changed since documentation.
5. Update the final GitHub profile repository: `AliShah1029384756`.
6. Update the premium interactive portfolio: `syed-muhammad-ali-naqvi`.

## Sensitive Information Rule

This archive is for project documentation, not for storing secrets or private credentials.

Never add:

- API keys
- Passwords
- Access tokens
- Private repository internals
- CNIC or other sensitive identity information
- Full academic transcripts or private grades
- Other credentials or private data

## Maintenance Rule

Whenever a repository receives a meaningful change, update its documentation here in the same work cycle.

That prevents the exact problem this archive is designed to solve: **forgetting what was changed and having to inspect everything again later.**

---

**Maintainer:** Syed Muhammad Ali Naqvi  
**Purpose:** Long-term portfolio/project knowledge archive
