import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Profile />
      <MainContent />
    </div>
  );
}

export default App;
