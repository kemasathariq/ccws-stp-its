# Conceptual Floor Plan — CCWS STP ITS

> **Status: provisional concept, not an official or measured floor plan.** No measured architectural plan has been verified for this specific photographed space. This sketch follows the team's description and the supplied interior photograph. Update it after the site walk.

## Conceptual zoning

```text
                   REAR / WINDOW WALL
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ZONE B: COLLABORATIVE WORKSPACE    ZONE C: INNOVATION    │
│  ┌──────────┐  ┌──────────────┐     ┌─────────────────┐  │
│  │ Lounge   │  │ Tables and   │     │ Train Exhibit   │  │
│  │ seating  │  │ chairs       │     └─────────────────┘  │
│  └──────────┘  └──────────────┘     ┌────────┐ ┌──────┐  │
│                                      │ Robot  │ │Motor-│  │
│  ┌──────────────────────┐            │ Arm    │ │cycle │  │
│  │ Cafe / snack counter │            └────────┘ └──────┘  │
│  └──────────────────────┘                                 │
│                                                          │
├──────────────────────── MAIN ACCESS ─────────────────────┤
                    FRONT / ENTRY SIDE
```

This is a logical composition proposal only. It does not assert that the cafe or any exhibit is located at these exact coordinates.

## Coordinate convention

- Building footprint centered around `(0, 0, 0)`.
- X = width (left/right).
- Y = height (up).
- Z = depth (front/back).
- Ground surface = `Y = 0`.
- Main/front facade is provisionally at negative Z.
- Coworking zone is provisionally on negative X.
- Innovation zone is provisionally on positive X.

## Parameter policy

All provisional dimensions live in `src/scene/layoutConfig.js`. The initial values are blockout placeholders only. Do not quote them as measured dimensions in a report or presentation.

## Onsite update record

| Item | Current status | Measured/confirmed value |
|---|---|---|
| Building footprint | Unverified | TBD |
| Interior width/depth | Unverified | TBD |
| Ceiling height | Unverified | TBD |
| Entrance orientation | Provisional negative Z | TBD |
| Workspace side | Provisional negative X | TBD |
| Exhibition side | Provisional positive X | TBD |
| Cafe position | Unknown | TBD |
| Train position | Unknown | TBD |
