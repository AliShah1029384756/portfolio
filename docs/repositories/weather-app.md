# Weather App

## Role

Small API-integrated frontend project demonstrating asynchronous JavaScript and external API consumption.

## Purpose

Fetch current weather for a user-entered city from OpenWeatherMap and present useful weather information in a simple interface.

## Features

- City search
- Real-time current-weather API request
- Temperature display
- Celsius/Fahrenheit switching
- Feels-like temperature
- Humidity
- Wind speed
- Visibility
- Weather-condition icons
- Invalid-city handling
- Invalid-API-key handling
- Network-error handling
- Enter-key search

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Fetch API
- OpenWeatherMap API

## Architecture

Static browser frontend → Fetch API → OpenWeatherMap → JSON response → client-side rendering.

## Security Note

The repository deliberately keeps the API key empty in source. This is important because a browser-only application cannot keep a client-side API key secret. The README explicitly warns against exposing keys in public commits. fileciteturn308file0turn309file0

For a production-grade version, requests should be proxied through a backend/service that controls the credential and rate limits.

## Audit Decision

The implementation already demonstrates the intended learning objectives well: API integration, async JavaScript, input validation, error states, and reusable rendering. No unnecessary redesign was made.

## Portfolio Position

**Low-medium / supporting project.** More technically useful than a static practice page because it demonstrates real external API integration, but it should remain below the major full-stack, AI, networking, and education projects.

## Future Improvements

- Five-day forecast
- Geolocation-based weather
- Better loading state
- More detailed API response handling
- Production-safe backend proxy

These are optional extensions, not evidence that the current learning project is incomplete.

## Status

**DOCUMENTED / FROZEN / SUPPORTING PROJECT**
