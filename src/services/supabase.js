import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabaseUrl = "https://nunpcxptepafhnuopwzh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51bnBjeHB0ZXBhZmhudW9wd3poIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3MTMwNzAsImV4cCI6MjAzMTI4OTA3MH0.VKRN_9gdmbifROWAjOF13u_R3Ga8r6n630sdL2-E6aA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
