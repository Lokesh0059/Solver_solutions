-- Contact inquiries table
CREATE TABLE IF NOT EXISTS public.contact_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    company TEXT NOT NULL,
    product TEXT NOT NULL,
    message TEXT NOT NULL,

    status TEXT NOT NULL DEFAULT 'new'
        CHECK (status IN ('new', 'contacted', 'closed')),

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status
    ON public.contact_inquiries (status);

CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at
    ON public.contact_inquiries (created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.contact_inquiries
ENABLE ROW LEVEL SECURITY;

-- Allow public contact form submissions
DROP POLICY IF EXISTS "Public insert contact_inquiries"
ON public.contact_inquiries;

CREATE POLICY "Public insert contact_inquiries"
ON public.contact_inquiries
FOR INSERT
WITH CHECK (true);