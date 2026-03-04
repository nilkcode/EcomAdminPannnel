import { createClient } from "@supabase/supabase-js";

const supabase_url = "https://chruoufyphsnapdpwxhv.supabase.co";
const supabase_key = 'sb_publishable_vjUL7oG3XWJv_Baq8wl1Kw_jrrTRXmY'


export const supabase = createClient(supabase_url, supabase_key)