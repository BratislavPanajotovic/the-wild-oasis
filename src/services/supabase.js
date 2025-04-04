import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://eyflgpcffehzrdsgyqzz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5ZmxncGNmZmVoenJkc2d5cXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4MDYwODAsImV4cCI6MjA1ODM4MjA4MH0.YJLZB5Zi1zYNKshCMnVVFZ-lUJS5ZhmOcBTXFyfqni0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
