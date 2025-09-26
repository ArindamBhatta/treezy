interface AppConfig {
  supabaseUrl: string;
  supabaseAnonKey: string;
  // Add other Supabase configuration as needed
}

const config: AppConfig = {
  supabaseUrl: String(process.env.REACT_APP_SUPABASE_URL),
  supabaseAnonKey: String(process.env.REACT_APP_SUPABASE_ANON_KEY),
};

export default config;
