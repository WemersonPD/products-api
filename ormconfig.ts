import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.development'
});

export default {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: 5432,
  migrations: [
    'src/db/migrations/*.ts'
  ],
  entities: [
    'src/db/entities/*.ts'
  ],
  cli: {
    entitiesDir: 'src/db/entities',
    migrationsDir: 'src/db/migrations'
  }
};
