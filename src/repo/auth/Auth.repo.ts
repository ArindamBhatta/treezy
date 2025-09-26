import { IAuthRepo, AuthUser } from "./IAuthRepo";
import { authService } from "../../service";

export class AuthRepo implements IAuthRepo {
  private static instance: AuthRepo;
  private authService: any;

  private constructor(authService: any) {
    this.authService = authService;
  }
  //create a singleton
  public static getInstance(): AuthRepo {
    if (!AuthRepo.instance) {
      AuthRepo.instance = new AuthRepo(authService);
    }
    return AuthRepo.instance;
  }

  signUp = async (
    email: string,
    password: string,
    name?: string
  ): Promise<AuthUser> => {
    try {
      const response = await this.authService.createAccount({
        email,
        password,
        name,
      });

      if (!response.user) {
        throw new Error("Failed to create account");
      }

      return {
        id: response.user.id,
        email: response.user.email,
        name: response.user.user_metadata?.name || name,
      };
    } catch (error) {
      throw new Error(
        `Sign up failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };

  signIn = async (email: string, password: string): Promise<AuthUser> => {
    try {
      const response = await this.authService.logIn({ email, password });

      if (!response.user) {
        throw new Error("Failed to sign in");
      }

      return {
        id: response.user.id,
        email: response.user.email,
        name: response.user.user_metadata?.name,
      };
    } catch (error) {
      throw new Error(
        `Sign in failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };

  getCurrentUser = async (): Promise<AuthUser | null> => {
    try {
      const user = await this.authService.getCurrentUser();

      if (!user) {
        return null;
      }

      return {
        id: user.id,
        email: user.email,
        name: user.user_metadata?.name,
      };
    } catch (error) {
      console.error("Error getting current user:", error);
      return null;
    }
  };

  signOut = async (): Promise<void> => {
    try {
      await this.authService.logout();
    } catch (error) {
      throw new Error(
        `Sign out failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };

  isAuthenticated = async (): Promise<boolean> => {
    const user = await this.getCurrentUser();
    return user !== null;
  };

  resetPassword = async (email: string): Promise<void> => {
    try {
      // This assumes the service layer implements resetPassword
      await (this.authService as any).resetPassword(email);
    } catch (error) {
      throw new Error(
        `Password reset failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };

  updateProfile = async (updates: {
    name?: string;
    avatar?: string;
  }): Promise<void> => {
    try {
      // This assumes the service layer implements updateProfile
      await (this.authService as any).updateProfile(updates);
    } catch (error) {
      throw new Error(
        `Profile update failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };
}
