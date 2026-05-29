import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://owqpjsjipumftwwfmzow.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93cXBqc2ppcHVtZnR3d2Ztem93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1NDk5MDUsImV4cCI6MjA5NTEyNTkwNX0.7glV-vH2PYRiwuwe6dia3m1Q3kHis92T5wL81fVp0mg'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
