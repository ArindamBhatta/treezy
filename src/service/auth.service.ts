import { IAuthService } from "./IAuthService";
import supabase from "../config/supabase";

//step 1: - initialize a supabase

export default class SupabaseAuthService implements IAuthService {
  private static instance: SupabaseAuthService;

  private constructor() {}

  public static getInstance(): SupabaseAuthService {
    if (!SupabaseAuthService.instance) {
      SupabaseAuthService.instance = new SupabaseAuthService();
    }
    return SupabaseAuthService.instance;
  }
  createAccount = async ({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name?: string;
  }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });
    if (error) throw error;
    return data;
  };

  logIn = async ({ email, password }: { email: string; password: string }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  };

  getCurrentUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  };

  logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  // Additional Supabase-specific methods
  resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) throw error;
  };

  updateProfile = async (updates: { name?: string; avatar?: string }) => {
    const { error } = await supabase.auth.updateUser({
      data: updates,
    });
    if (error) throw error;
  };

  onAuthStateChange = (callback: (event: string, session: any) => void) => {
    return supabase.auth.onAuthStateChange(callback);
  };
}
