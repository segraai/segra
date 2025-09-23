import { createClient } from '@supabase/supabase-js'

// Debug: Log all available environment variables
console.log('All environment variables:', import.meta.env)

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('Supabase URL:', supabaseUrl)
console.log('Supabase Anon Key:', supabaseAnonKey ? 'Present' : 'Missing')

if (!supabaseUrl) {
  console.error('VITE_SUPABASE_URL is missing. Available env vars:', Object.keys(import.meta.env))
  throw new Error('Missing VITE_SUPABASE_URL environment variable. Please ensure your Supabase integration is properly configured.')
}

if (!supabaseAnonKey) {
  console.error('VITE_SUPABASE_ANON_KEY is missing. Available env vars:', Object.keys(import.meta.env))
  throw new Error('Missing VITE_SUPABASE_ANON_KEY environment variable. Please ensure your Supabase integration is properly configured.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)