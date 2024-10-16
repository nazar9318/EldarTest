import React, { createContext, useContext, useState, ReactNode } from 'react';

type AuthContextType = {
  role: 'admin' | 'user' | null;
  username: string | null;
  login: (role: 'admin' | 'user', username: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<'admin' | 'user' | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  const login = (userRole: 'admin' | 'user', username: string) => {
    setRole(userRole);
    setUsername(username);
  };

  const logout = () => {
    setRole(null);
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ role, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
