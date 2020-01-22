import React from 'react';
import './App.css';
import { AuthProvider } from './contexts/auth';
import { MenuProvider } from './contexts/menu';
import Dashboard from './components/dashboard/Dashboard';
const App: React.FC = () => {
  return (
    <AuthProvider>
      <MenuProvider>
        <Dashboard/>
      </MenuProvider>
    </AuthProvider>
  );
};

export default App;
