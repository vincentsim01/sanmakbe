# Prisma ORM 7

This project uses Prisma ORM 7 with PostgreSQL. `DATABASE_URL` is loaded from
`.env` by `prisma.config.ts` for CLI commands and by `PrismaService` at runtime.
The Nest module connects on startup and disconnects during shutdown.

## Schema and client generation

The Prisma schema is [`src/prisma/schema.prisma`](src/prisma/schema.prisma).
After changing it, generate the typed client:

```bash
npx prisma generate --config prisma.config.ts
```

The generated client is written to `src/prisma/generated` and is regenerated
automatically after dependency installation.

## Development migrations

The initial migration is included. Apply it to a new, empty development
database:

```bash
npx prisma migrate dev --config prisma.config.ts
```

After each schema change, create and apply a named migration:

```bash
npx prisma migrate dev --config prisma.config.ts --name <migration-name>
npx prisma generate --config prisma.config.ts
```

`migrate dev` checks for schema drift, applies pending migrations, creates a
migration for schema changes. Generate Prisma Client separately. Review generated
SQL under `src/prisma/migrations` before committing it. Do not run this command
against a populated database that has no migration history without first
following Prisma's baselining workflow.

In production, apply committed migrations with:

```bash
npx prisma migrate deploy --config prisma.config.ts
```

Always pass `--config prisma.config.ts`: this repository also contains a
separate `prisma7.config.ts` and schema that are not used by the application.

## Nest usage

`PrismaModule` exports `PrismaService`. Import the module into a feature module
and inject the service to query the database:

```typescript
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }
}
```
