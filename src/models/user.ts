export interface User {
  name: string;
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  email: string | null;
  bio: string;
}
