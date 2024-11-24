export interface User {
  name: string;
  avatar_url: string;
  followers: number;
  following: number;
  email: string | null;
  bio: string;
}

export interface Repository {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  html_url: string;
  full_name: string;
}
