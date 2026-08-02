import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './types';

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

let browserClient: SupabaseClient<Database> | null = null;

/** Client for browser and public read/write operations (uses anon key). */
export function createBrowserClient(): SupabaseClient<Database> {
  if (typeof window !== 'undefined' && browserClient) {
    return browserClient;
  }

  const client = createClient<Database>(getSupabaseUrl(), getSupabaseAnonKey(), {
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
export function createServerClient(): SupabaseClient<Database> {
  return createClient<Database>(getSupabaseUrl(), getSupabaseAnonKey(), {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

/** Server-only admin client (bypasses RLS). Never expose to the browser. */
export function createAdminClient(): SupabaseClient<Database> {
  const serviceRoleKey = getSupabaseServiceRoleKey();
  if (!serviceRoleKey) {
    throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY in environment variables');
  }

  return createClient<Database>(getSupabaseUrl(), serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

let serverClient: SupabaseClient<Database> | null = null;

/** Singleton server client for API routes and server components. */
export function getSupabase(): SupabaseClient<Database> {
  if (!serverClient) {
    serverClient = createServerClient();
  }
  return serverClient;
}
