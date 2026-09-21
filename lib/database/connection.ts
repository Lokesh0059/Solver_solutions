import { createClient, SupabaseClient } from '@supabase/supabase-js';

function getSupabaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!url) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL in environment variables');
  }
  return url;
}

function getSupabaseAnonKey(): string {
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!key) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY in environment variables');
  }
  return key;
}

function getSupabaseServiceRoleKey(): string | undefined {
  return process.env.SUPABASE_SERVICE_ROLE_KEY;
}

let browserClient: SupabaseClient | null = null;
let serverClient: SupabaseClient | null = null;

/** Client for browser and public read/write operations (uses anon key). */
export function createBrowserClient(): SupabaseClient {
  if (typeof window !== 'undefined' && browserClient) {
    return browserClient;
  }

  const client = createClient(getSupabaseUrl(), getSupabaseAnonKey(), {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  });

  if (typeof window !== 'undefined') {
    browserClient = client;
  }

  return client;
}

/** Server-side client with anon key (respects RLS policies). */
export function createServerClient(): SupabaseClient {
  return createClient(getSupabaseUrl(), getSupabaseAnonKey(), {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

/** Server-only admin client (bypasses RLS). Never expose to the browser. */
export function createAdminClient(): SupabaseClient {
  const serviceRoleKey = getSupabaseServiceRoleKey();
  if (!serviceRoleKey) {
    throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY in environment variables');
  }

  return createClient(getSupabaseUrl(), serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

/** Singleton server client for API routes and server components. */
export function getSupabase(): SupabaseClient {
  if (!serverClient) {
    serverClient = createServerClient();
  }
  return serverClient;
}
