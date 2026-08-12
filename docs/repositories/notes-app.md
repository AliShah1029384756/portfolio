# Notes App

## Role

Small frontend productivity application demonstrating CRUD-style note management and browser persistence.

## Purpose

A focused local note-taking workspace designed to practice practical frontend state management rather than backend development.

## Features

- Create notes
- Read/select notes
- Edit title and content
- Delete notes
- Search notes
- Sorted note list behavior
- Character count
- Autosave feedback
- Persistent browser storage through `localStorage`
- Split-pane workspace/editor UI

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Browser `localStorage`
- Google Fonts

## UI / UX

The current implementation goes beyond a basic tutorial UI: it uses a focused split-pane editor, responsive layout, glass-style panels, search, and autosave feedback. The visual presentation is already polished for a small practice application.

## Architecture

```text
Browser
  ↓
Vanilla JS state
  ↓
Notes list + editor
  ↓
localStorage persistence
```

There is no backend or database.

## Audit Decision

README already documents the learning purpose, CRUD flows, persistence, common mistakes, and future improvements. The frontend structure also clearly communicates search, write, and save workflows. No major code rewrite is justified.

## Portfolio Position

**Low-medium / supporting project.** Stronger than a basic beginner exercise because it demonstrates CRUD, local persistence, search, state synchronization, and a more deliberate UX. Still not a primary featured project compared with AutiSmart, P2P, ClinicOS, SchoolIEP, or the larger educational platforms.

## Future Ideas

Existing roadmap includes Markdown support and import/export. These are optional enhancements and should only be implemented if the project is intentionally promoted further.

## Status

**DOCUMENTED / FROZEN / SUPPORTING PROJECT**
