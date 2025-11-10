# Backend (scaffold)

Tech: Node.js + TypeScript + PostgreSQL

## Structure (suggested)
src/
  core/
    domain/
    application/
    ports/
  adapters/
    inbound/http/ (Express controllers)
    outbound/postgres/ (repository implementations)
  infrastructure/
    db/ (migrations, seeds)
    server/ (Express setup)
  shared/

Migrations and seeds should include the 5 routes specified by the assignment.

Scripts:
- `npm run dev` — start server (stub)
- `npm run test` — run tests (stub)
