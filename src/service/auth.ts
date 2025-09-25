import config from "../config/config";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.account = new Account(this.client);
  }
  // create account don't care which bash is used
  public async createAccount({ email, password, name }: any) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return userAccount;
      } else {
        throw new Error("User not created");
      }
    } catch (error) {
      throw error;
    }
  }

  // login
  async logIn({ email, password }: { email: string; password: string }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }
}

const authService: AuthService = new AuthService();
export default authService;
