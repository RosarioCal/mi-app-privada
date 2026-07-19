import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://awprhszkmmccgrlqflzy.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3cHJoc3prbW1jY2dybHFmbHp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1NTA0MDEsImV4cCI6MjA5NTEyNjQwMX0.XZXtML6eKJnh2ozsUc7phbUYklhBYCZc1ppa4MXKIlw'

export const supabase = createClient(supabaseUrl, supabaseKey)
