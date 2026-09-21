import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createAdminClient } from '@/lib/database/connection';
import { submitContactInquiry } from '@/lib/database/queries';
import type { ContactInquiryRow } from '@/lib/database/types';
import { db } from '@/lib/database/db';

export const dynamic = 'force-dynamic';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().min(1),
  product: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: 'Invalid form data',
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

   await submitContactInquiry(parsed.data);

return NextResponse.json(
  { success: true },
  { status: 201 }
);
  } catch (error) {
    console.error('Contact form submission failed:', error);

    const supabaseError = error as {
      code?: string;
      message?: string;
    };

    if (supabaseError.code === 'PGRST205') {
      return NextResponse.json(
        {
          error:
            'The contact database table has not been configured yet.',
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        error: 'Failed to save your inquiry. Please try again later.',
      },
      { status: 500 }
    );
  }
}
// export async function GET() {
//   try {
//     const result = await db.query('SELECT NOW() AS current_time');

//     return NextResponse.json({
//       success: true,
//       databaseTime: result.rows[0].current_time,
//     });
//   } catch (error) {
//     console.error('Database connection failed:', error);

//     return NextResponse.json(
//       {
//         success: false,
//         error: 'Database connection failed',
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function GET(request: Request) {
//   const adminKey = process.env.ADMIN_API_KEY;
//   const providedKey = request.headers.get('x-admin-key');

//   if (!adminKey || providedKey !== adminKey) {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//   }

//   try {
//     const { data, error } = await createAdminClient()
//       .from('contact_inquiries')
//       .select('*')
//       .order('created_at', { ascending: false });

//     if (error) throw error;

//     return NextResponse.json({ inquiries: (data ?? []) as ContactInquiryRow[] });
//   } catch (error) {
//     console.error('Failed to fetch contact inquiries:', error);

//     const message =
//       error instanceof Error ? error.message : 'Failed to fetch contact inquiries';

//     return NextResponse.json({ error: message }, { status: 500 });
//   }
// }
