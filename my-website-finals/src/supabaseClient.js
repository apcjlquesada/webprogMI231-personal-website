import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sczhptobsckhkricuxnh.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjemhwdG9ic2NraGtyaWN1eG5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA4OTI4MTEsImV4cCI6MjA1NjQ2ODgxMX0.NWPH8WpZlZPbSld9vWFNgrFbvvsDRcSZpPANUPIFaCs'; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);