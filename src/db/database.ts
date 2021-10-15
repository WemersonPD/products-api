import { createConnection } from 'typeorm';
import * as path from 'path';

export async function initializeDatabase(): Promise<void> {
  await createConnection({
    type: 'postgres',

    uuidExtension: 'uuid-ossp',

    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: 5432,

    migrations: [`${path.join(__dirname, 'migrations/*{.ts,.js}')}`],
    entities: [`${path.join(__dirname, 'entities/*{.ts,.js}')}`],

    migrationsRun: true
  });
}
