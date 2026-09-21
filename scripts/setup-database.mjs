import fs from 'node:fs';
import path from 'node:path';
import pg from 'pg';

const { Client } = pg;

async function main() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl || databaseUrl.includes('[YOUR-PASSWORD]')) {
    console.error(
      'Set DATABASE_URL in .env with your Supabase Postgres password.\n' +
        'Find it in Supabase Dashboard → Project Settings → Database → Connection string.'
    );
    process.exit(1);
  }

  const schemaPath = process.argv[2]
    ? path.resolve(process.argv[2])
    : path.join(process.cwd(), 'lib', 'database', 'contact-only.sql');

  const sql = fs.readFileSync(schemaPath, 'utf8');
  const client = new Client({ connectionString: databaseUrl, ssl: { rejectUnauthorized: false } });

  try {
    await client.connect();
    await client.query(sql);
    console.log(`Database setup complete using ${path.basename(schemaPath)}`);
  } catch (error) {
    console.error('Database setup failed:', error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

main();
