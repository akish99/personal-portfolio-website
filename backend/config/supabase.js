// import { createClient } from '@supabase/supabase-js';
// const { SUPABASE_URL, SUPABASE_SECRET_KEY } = process.env;
// if (!SUPABASE_URL || !SUPABASE_SECRET_KEY) throw new Error('Missing Supabase environment variables.');
// export const supabase = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY, { auth: { persistSession: false, autoRefreshToken: false } });


import { createClient } from '@supabase/supabase-js';

const { SUPABASE_URL, SUPABASE_SECRET_KEY } = process.env;

if (!SUPABASE_URL || !SUPABASE_SECRET_KEY) {
  throw new Error('Missing Supabase environment variables.');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_SECRET_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
});