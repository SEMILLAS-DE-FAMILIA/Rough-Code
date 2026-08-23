import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Faltan las variables de entorno NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY. Revisa tu archivo .env.local'
  );
}

// Este cliente usa la "anon key" (pública, segura de exponer en el navegador)
// Las políticas de Row Level Security en Supabase son las que realmente
// controlan qué se puede leer/escribir con esta key.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);