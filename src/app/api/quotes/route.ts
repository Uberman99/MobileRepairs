import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';
import { z } from 'zod';

// Define the shape and validation rules for our expected data
const quoteSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }).max(100),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().max(20).optional(), // Optional phone number
  details: z.string().min(10, { message: 'Details must be at least 10 characters.' }).max(500),
});

export async function POST(request: Request) {
  try {
    const requestBody = await request.json();
    const validation = quoteSchema.safeParse(requestBody);

    if (!validation.success) {
      return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const { name, email, phone, details } = validation.data;

    const { data, error } = await supabase
      .from('quotes') // Make sure this table exists in your Supabase project
      .insert([{ name, email, phone, details }]) // Use new field names
      .select();

    if (error) {
      console.error('Supabase Error:', error);
      return NextResponse.json({ error: 'Failed to submit quote to the database.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Quote submitted successfully!', data: data }, { status: 201 });
  } catch (e) {
    console.error('API Route Error:', e);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
