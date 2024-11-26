export interface User {
  name: string;
  avatar_url: string;
  followers: number;
  following: number;
  email: string | null;
  bio: string;
}
