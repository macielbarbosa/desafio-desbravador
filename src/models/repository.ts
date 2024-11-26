export interface Repository {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  html_url: string;
  full_name: string;
  owner: {
    avatar_url: string;
  };
}
