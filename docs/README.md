# Repository Documentation Archive

This folder is the working documentation archive for the GitHub portfolio ecosystem.

## Purpose

This repository is no longer being treated as the final public portfolio. Its current purpose is to preserve a structured record of repositories that have been audited, improved, frozen, or intentionally deferred.

The archive exists so future profile/portfolio work can be derived from documented facts instead of repeatedly re-inspecting every repository.

## Master Tracker

The complete current **31-repository status map** is maintained in [`REPOSITORY_TRACKER.md`](REPOSITORY_TRACKER.md).

**Rule:** check the tracker before touching a repository. If a repository is already marked `DONE`, `DOCUMENTED`, or `FROZEN`, do not repeat the same work unless there is a new concrete reason.

## Documentation Rules

For each repository, record:

- Purpose and audience
- Main features
- Technology/architecture
- Important modules
- Current repository status
- Changes made by the assistant
- Important commits
- Known limitations
- Security/privacy considerations
- Portfolio value
- Whether it is a standalone showcase or part of a larger collection
- Future work that is actually worthwhile

## Status Labels

- **DONE** — meaningful audit/improvement completed
- **DOCUMENTED** — documentation completed; code intentionally unchanged
- **FROZEN** — inspected and intentionally left unchanged because further edits were not justified
- **ACTIVE** — known improvement work remains
- **HOLD** — intentionally deferred
- **FINAL** — reserved for the final profile/portfolio repositories
- **HUB** — documentation/index repository rather than a project showcase

## Current Priority

Only these areas currently require meaningful attention:

1. `Fyp-Autismart` — final runtime/security/deployment verification.
2. `syed-muhammad-ali-naqvi` — intentionally HOLD for the later 3D/interactive redesign.
3. `AliShah1029384756` — final GitHub profile update after the repository audit is stable.

Everything else should be treated according to the master tracker rather than repeatedly re-audited.

## Portfolio Relationship

Some individual repositories also appear inside `university-course-projects`. The standalone repository is treated as the primary showcase when it exists; the collection repository remains the academic archive.

Examples:

- `p2p-communication-system` → standalone networking showcase + included in academic collection
- `compiler-project` → standalone compiler showcase + included in academic collection

Do not duplicate improvement work simply because a project appears in both places.

## Final Profile Workflow

When the final GitHub profile and premium portfolio are updated:

1. Read the master repository tracker first.
2. Read the relevant per-repository documentation.
3. Select the strongest projects based on current goals.
4. Reuse only documented, proof-backed facts.
5. Verify only facts that may have changed.
6. Update `AliShah1029384756` profile repository.
7. Update `syed-muhammad-ali-naqvi` as the premium interactive/3D portfolio.

## Maintenance Rule

Whenever a repository receives a meaningful change, update its per-repository documentation **and** the master tracker in the same work cycle.

This archive should remain the single working source for future portfolio/profile work.
