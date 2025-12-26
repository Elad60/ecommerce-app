export interface User {
  id: number;
  username: string;
  email: string;
  role: 'user' | 'admin';
}
export interface UserResponse {
  user: User;
  token: string;
}
