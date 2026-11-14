# Prisma ORM 7

This project uses Prisma ORM 7 with PostgreSQL. `DATABASE_URL` is loaded from
`.env` by `prisma.config.ts` for CLI commands and by `PrismaService` at runtime.
The Nest module connects on startup and disconnects during shutdown.

## Schema and client generation

The Prisma schema is [`src/prisma/schema.prisma`](src/prisma/schema.prisma).
After changing it, generate the typed client:

```bash
npx prisma generate
```

The generated client is written to `src/prisma/generated` and is regenerated
automatically after dependency installation.

## Development migrations

For a new, empty development database, create and apply the initial migration:

```bash
npx prisma migrate dev --name init
```

After each schema change, create and apply a named migration:

```bash
npx prisma migrate dev --name <migration-name>
```

`migrate dev` checks for schema drift, applies pending migrations, creates a
migration for schema changes, and regenerates Prisma Client. Review generated
SQL under `src/prisma/migrations` before committing it. Do not run this command
against a populated database that has no migration history without first
following Prisma's baselining workflow.

In production, apply committed migrations with:

```bash
npx prisma migrate deploy
```

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
