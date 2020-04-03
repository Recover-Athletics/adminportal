import React from 'react';
import './App.css';
import { BrowserRouter , Route } from 'react-router-dom'
import Home from './pages/unauthenticated/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Home} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
