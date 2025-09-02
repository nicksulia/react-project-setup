// Authentication API endpoints
export const login = async (_credentials: { username: string; password: string }) => {
  // Implement login logic
  return { token: 'example-token', user: { id: '1', username: 'user' } };
};
