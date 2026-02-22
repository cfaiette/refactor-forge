# RefactorForge Architecture

## Overview

RefactorForge is an open-source refactoring training platform focused on helping developers practice applying design patterns to small, messy code examples (≤ 100 lines).

The MVP will:

- Present a refactoring challenge
- Allow the user to submit a refactored solution
- Evaluate structural correctness using deterministic rules
- Provide optional AI-based architectural critique

Stack:
- Backend: Laravel (API-first)
- Frontend: Angular
- Runtime: Docker (LAMP stack, locally exposed)

---

# System Architecture

RefactorForge follows a layered architecture inspired by DDD principles, while remaining lightweight for MVP.

## High-Level Components

- Angular Frontend (SPA)
- Laravel API Backend
- Evaluation Engine (AST + Rule Engine)
- Optional AI Critique Adapter
- MySQL Database
- Docker Environment (LAMP)

---

# Backend Architecture (Laravel)

## Layered Structure

```
app/
 ├── Domain/
 ├── Application/
 ├── Infrastructure/
 └── Presentation/
```

---

## Domain Layer

Pure business logic. No framework dependencies.

### Entities

### Challenge
- id
- title
- language (php | typescript)
- messyCode
- expectedPattern
- difficulty

### Pattern
- name
- intent
- whenToUse
- structuralRequirements
- exampleSolution

### RefactorAttempt
- challengeId
- submittedCode
- score
- feedback

### CodeSmell (Value Object)
- type
- description

---

## Application Layer

Use-case orchestration.

### Commands / Queries

- GetChallenge
- SubmitRefactorAttempt
- EvaluateAttempt
- RevealPattern

The Application layer:
- Loads challenge
- Passes submitted code to evaluator
- Aggregates scoring results
- Returns DTO to Presentation layer

---

## Infrastructure Layer

Contains framework, parsing, and external integrations.

### Components

- PHP AST Adapter (nikic/php-parser)
- TypeScript AST Adapter (TypeScript compiler via Node bridge)
- Rule Engine
- AI Critique Adapter (LLM integration, optional)
- Eloquent Repositories

The evaluator will:

1. Parse submitted code
2. Extract structure
3. Run structural validation rules
4. Return evaluation results

---

## Presentation Layer

Laravel Controllers (API only)

Endpoints:

- GET /api/challenges/{id}
- POST /api/attempts
- GET /api/patterns/{id}/reveal

Controllers map HTTP requests to Application use-cases.

No domain logic allowed here.

---

# Frontend Architecture (Angular)

Angular SPA consuming Laravel API.

## Core Modules

- Challenge Module
- Refactor Editor Module
- Results Module

## UI Layout

- Left pane: messy code (read-only)
- Right pane: Monaco editor for solution
- Submit button
- Results panel (score + feedback)

---

# Evaluation Engine Design

MVP uses deterministic structural evaluation.

Example: Strategy Pattern Validation

Rules:
- No large if/else chain on same discriminator
- Presence of interface or abstract class
- At least 2 concrete implementations
- Context delegates to abstraction

Scoring Model:

- Structural correctness (70%)
- Pattern completeness (20%)
- Code clarity heuristics (10%)

AI critique (optional):
- Cohesion
- Naming clarity
- SOLID feedback
- Architectural suggestions

AI feedback never overrides deterministic score.

---

# Docker Environment

Docker Compose setup:

Services:
- app (Laravel + Apache)
- mysql
- node (for TS AST parsing bridge)

Ports exposed locally.

Volumes:
- Source mounted into container
- Database persisted

Environment Variables:
- DB credentials
- AI provider key (optional)

---

# MVP Scope

Initial Challenges:

1. Replace if/else with Strategy
2. Extract Factory from constructor logic
3. Replace switch with Polymorphism
4. Introduce Specification for filtering logic
5. Template Method refactor

Constraints:
- Each challenge ≤ 100 lines
- PHP + TypeScript support
- Single-file submission

---

# Future Extensions (Post-MVP)

- Step tracking during refactor
- Timed challenges
- Difficulty progression
- VS Code extension
- GitHub PR analyzer
- Community challenge submissions

---

# Design Principles

- Keep MVP simple
- Deterministic evaluation first
- AI critique as enhancement, not dependency
- Clear separation of layers
- Avoid over-engineering

RefactorForge is a refactoring gym, not an enterprise architecture platform.

Build small. Iterate fast. Refine deliberately.

