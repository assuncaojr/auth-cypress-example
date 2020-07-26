import React, { useState } from 'react';
import Home from './screens/Home';
import Auth from './screens/Auth';

function App() {
  const [token, setToken] = useState<string>(
    localStorage.getItem('AuthExample') || ''
  )

  if (!token) return <Auth callback={setToken} />;

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
