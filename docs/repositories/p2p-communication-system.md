# P2P Communication System

## Role

Networking-focused standalone project demonstrating peer-to-peer communication and file-sharing workflows over a LAN.

## Purpose

A signaling-assisted P2P application where a lightweight server helps peers establish connections, after which communication/data-transfer workflows can occur between peers.

## Features

- LAN peer communication
- Peer-to-peer file-sharing workflow
- PeerJS signaling
- React frontend
- Express backend
- Optional Electron entry point
- Health endpoint

## Technology

- React 18
- Node.js
- Express
- PeerJS / ExpressPeerServer
- Electron
- styled-components / react-icons

## Architecture

React frontend → Express/PeerJS signaling server → peer discovery → direct peer connections.

## Work Completed

Server hardening/cleanup was completed, including environment-configurable port handling, safer LAN interface handling, disabled debug mode, health response cleanup, and shutdown handling. README was also substantially improved with architecture, LAN testing, endpoints, security limitations, and future improvements.

Important commit from the improvement pass: `0027a46` — `fix: harden and clean up P2P signaling server`.

Documentation commit: `add6d94` — `docs: improve P2P project documentation`.

## Security Position

Treat as a trusted-LAN/coursework project rather than a production public messaging system. Authentication, strong peer identity, end-to-end application encryption, and resumable transfers remain future improvements.

## Portfolio Position

**High technical depth.** Strong evidence of networking, client/server architecture, real-time communication, and practical systems work.

## Collection Relationship

Also represented in the university academic collection. This standalone repository is the primary showcase; do not duplicate edits in the collection merely for consistency.

## Status

**DONE / STANDALONE SHOWCASE**
