import React from 'react';

const AuthContext = React.createContext();

export function AuthContext({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
