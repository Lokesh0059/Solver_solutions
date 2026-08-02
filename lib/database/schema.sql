-- Solver Solutions database schema (PostgreSQL / Supabase)
-- Run this in the Supabase SQL Editor to create all tables.

-- Product categories
CREATE TYPE product_category AS ENUM (
  'Business',
  'Education',
  'Healthcare',
  'Industry',
  'Retail',
  'Services'
);

-- Products
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category product_category NOT NULL,
  description TEXT NOT NULL,
  features JSONB NOT NULL DEFAULT '[]',
  icon TEXT NOT NULL,
  gradient TEXT NOT NULL,
  featured BOOLEAN NOT NULL DEFAULT FALSE,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Marketing tools
CREATE TABLE IF NOT EXISTS marketing_tools (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  features JSONB NOT NULL DEFAULT '[]',
  icon TEXT NOT NULL,
  gradient TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Mobile apps
CREATE TABLE IF NOT EXISTS mobile_apps (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  features JSONB NOT NULL DEFAULT '[]',
  icon TEXT NOT NULL,
  gradient TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Why choose us features
CREATE TABLE IF NOT EXISTS why_choose_features (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  color TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Industries
CREATE TABLE IF NOT EXISTS industries (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  icon TEXT NOT NULL,
  color TEXT NOT NULL,
  bg_color TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Platform features (ERP capabilities)
CREATE TABLE IF NOT EXISTS platform_features (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  span TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Trust / stats counters
CREATE TABLE IF NOT EXISTS stats (
  id SERIAL PRIMARY KEY,
  value NUMERIC NOT NULL,
  suffix TEXT NOT NULL DEFAULT '',
  label TEXT NOT NULL,
  icon TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  avatar TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Client logos (company names)
CREATE TABLE IF NOT EXISTS client_logos (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Navigation links
CREATE TABLE IF NOT EXISTS nav_links (
  id SERIAL PRIMARY KEY,
  label TEXT NOT NULL,
  href TEXT NOT NULL,
  has_mega_menu BOOLEAN NOT NULL DEFAULT FALSE,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  product TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_products_category ON products (category);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products (featured);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status ON contact_inquiries (status);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at ON contact_inquiries (created_at DESC);

-- Updated_at trigger helper
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER marketing_tools_updated_at
  BEFORE UPDATE ON marketing_tools
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER mobile_apps_updated_at
  BEFORE UPDATE ON mobile_apps
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (public read for content tables)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketing_tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE mobile_apps ENABLE ROW LEVEL SECURITY;
ALTER TABLE why_choose_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE industries ENABLE ROW LEVEL SECURITY;
ALTER TABLE platform_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_logos ENABLE ROW LEVEL SECURITY;
ALTER TABLE nav_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read products" ON products FOR SELECT USING (true);
CREATE POLICY "Public read marketing_tools" ON marketing_tools FOR SELECT USING (true);
CREATE POLICY "Public read mobile_apps" ON mobile_apps FOR SELECT USING (true);
CREATE POLICY "Public read why_choose_features" ON why_choose_features FOR SELECT USING (true);
CREATE POLICY "Public read industries" ON industries FOR SELECT USING (true);
CREATE POLICY "Public read platform_features" ON platform_features FOR SELECT USING (true);
CREATE POLICY "Public read stats" ON stats FOR SELECT USING (true);
CREATE POLICY "Public read testimonials" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Public read client_logos" ON client_logos FOR SELECT USING (true);
CREATE POLICY "Public read nav_links" ON nav_links FOR SELECT USING (true);

-- Allow anonymous contact form inserts
CREATE POLICY "Public insert contact_inquiries" ON contact_inquiries
  FOR INSERT WITH CHECK (true);
