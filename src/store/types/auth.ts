export interface UserInfo {
  name: string;
  email: string;
}

export interface AuthData {
  id: string;
  token: string;
  refreshToken: string;
  user: UserInfo;
}

export interface AuthState extends AuthData {
  loading: boolean;
  error: string;
}
