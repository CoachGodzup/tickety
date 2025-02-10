import { createClient } from '@supabase/supabase-js'

// eslint-disable-next-line node/prefer-global/process
const supabaseUrl = process.env.SUPABASE_URL
// eslint-disable-next-line node/prefer-global/process
const supabaseKey = process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)
