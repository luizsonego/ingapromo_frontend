
export const TOKEN_KEY = process.env.REACT_APP_ACCESS_TOKEN
export const isAuthenticated = () => {
  const sessionKey = localStorage.getItem(TOKEN_KEY);
  // const sessionKey = true
  return !!sessionKey;
};

