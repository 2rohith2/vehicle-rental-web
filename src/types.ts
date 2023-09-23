export interface LoginAction {
  access_token: string;
  email: string;
  name: string;
  refresh_token: string;
  role: string;
}

export enum Pages {
  Dashboard = "/dashboard",
  Home = "/",
  Login = "/login",
}

export enum UserRoles {
  Admin = "admin",
  User = "user"
}

export enum UserConfig {
  AccessToken = "access_token",
  EMail = "email",
  Name = "name",
  Role = "role"
}