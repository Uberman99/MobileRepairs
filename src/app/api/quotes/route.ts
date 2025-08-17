import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';
import { z } from 'zod';

// Define the shape and validation rules for our expected data
const quoteSchema = z.object({
  author: z.string().min(1, { message: 'Author cannot be empty.' }).max(100),
  quote: z.string().min(1, { message: 'Quote cannot be empty.' }).max(500),
});

export async function POST(request: Request) {
  try {
    // 1. Receive the raw form data from the frontend
    const requestBody = await request.json();

    // 2. Perform validation to ensure the data is clean
    const validation = quoteSchema.safeParse(requestBody);

    if (!validation.success) {
      // If validation fails, return a 400 Bad Request error with details
      return NextResponse.json({ error: validation.error.format() }, { status: 400 });
    }

    const { author, quote } = validation.data;

    // 3. Use the Supabase client to insert the validated data
    const { data, error } = await supabase
      .from('quotes') // IMPORTANT: 'quotes' must be your exact table name in Supabase
      .insert([{ author, quote }])
      .select();

    if (error) {
      // If Supabase returns an error, log it and return a 500 Internal Server Error
      console.error('Supabase Error:', error);
      return NextResponse.json({ error: 'Failed to submit quote to the database.' }, { status: 500 });
    }

    // 4. Return a success message with the newly created data
    return NextResponse.json({ message: 'Quote submitted successfully!', data: data }, { status: 201 });

  } catch (e) {
    console.error('API Route Error:', e);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}