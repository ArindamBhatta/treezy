export interface IAuthService {
  createAccount(params: {
    email: string;
    password: string;
    name?: string;
  }): Promise<any>;

  logIn(params: { email: string; password: string }): Promise<any>;

  getCurrentUser(): Promise<any>;

  logout(): Promise<void>;
}
