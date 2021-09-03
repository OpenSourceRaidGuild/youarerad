import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pbkwiofuobjijlkembew.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzY5MTM1MSwiZXhwIjoxOTQzMjY3MzUxfQ.y-1NJn_cbpcdSoihSFkq8RqWbBCWha4ZhhamiGYGH7s'

export const supabase = createClient(supabaseUrl, supabaseKey)
