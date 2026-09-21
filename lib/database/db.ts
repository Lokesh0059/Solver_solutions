import { Pool } from 'pg';

declare global {
  // eslint-disable-next-line no-var
  var dbPool: Pool | undefined;
}

function createPool(): Pool {
  const host = process.env.DB_HOST;
  const port = process.env.DB_PORT;
  const database = process.env.DB_NAME;
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;

  if (!host) throw new Error('Missing DB_HOST');
  if (!port) throw new Error('Missing DB_PORT');
  if (!database) throw new Error('Missing DB_NAME');
  if (!user) throw new Error('Missing DB_USER');
  if (!password) throw new Error('Missing DB_PASSWORD');

  return new Pool({
    host,
    port: Number(port),
    database,
    user,
    password,

    ssl: {
      rejectUnauthorized: false,
    },

    max: 10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
  });
}

export const db =
  globalThis.dbPool ??
  createPool();

if (process.env.NODE_ENV !== 'production') {
  globalThis.dbPool = db;
}