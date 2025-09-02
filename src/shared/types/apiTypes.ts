// TypeScript interfaces for API responses
export interface AuthResponse {
  token: string;
  user: {
    id: string;
    username: string;
  };
}
