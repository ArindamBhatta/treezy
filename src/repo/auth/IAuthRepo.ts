export interface AuthUser {
  id: string;
  email: string;
  name?: string;
}

export interface IAuthRepo {
  signUp(email: string, password: string, name?: string): Promise<AuthUser>;
  signIn(email: string, password: string): Promise<AuthUser>;
  getCurrentUser(): Promise<AuthUser | null>;
  signOut(): Promise<void>;
  isAuthenticated(): Promise<boolean>;
  resetPassword(email: string): Promise<void>;
  updateProfile(updates: { name?: string; avatar?: string }): Promise<void>;
}
