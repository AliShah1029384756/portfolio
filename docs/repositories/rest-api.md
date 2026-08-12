# REST API — Task Manager

## Role

Backend-focused technical proof project demonstrating RESTful API design with Node.js and Express.

## Purpose

A small CRUD Task Manager API built to practice backend routing, request validation, resource-oriented endpoints, and HTTP status handling.

## API Surface

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/tasks` | List tasks, with optional completed filter |
| GET | `/api/tasks/:id` | Retrieve one task |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update task title/completion state |
| DELETE | `/api/tasks/:id` | Delete a task |

## Technology

- Node.js
- Express 4
- Nodemon for development

The package configuration is intentionally small and focused on the API learning objective. fileciteturn312file0

## Current Scope

The repository is intentionally a lightweight backend exercise. It does not currently present a persistent database or authentication layer as part of its documented scope.

## Audit

- README clearly documents the CRUD surface, local setup, learning outcomes, and known next improvements. fileciteturn310file0
- No `TODO` marker was found during the repository audit.
- No unnecessary code rewrite was justified from the available project documentation.

## Portfolio Position

**Medium-high technical proof.** Although small, this repo is useful because it isolates backend/API fundamentals clearly. It can support claims around Node.js, Express, RESTful design, validation, routing, and HTTP semantics.

It should not outrank larger full-stack projects, but it is stronger technical evidence than a basic frontend practice app.

## Future Improvements

The existing README identifies database persistence and authentication/protected routes as future improvements. Those should be treated as optional next iterations rather than pretending they already exist. fileciteturn310file0

## Status

**DOCUMENTED / FROZEN / TECHNICAL PROOF**
