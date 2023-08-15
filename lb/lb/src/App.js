import { useState } from 'react';
import './App.css';
import IndexPage from './components/Index';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn,setLoggedIn] = useState(true)
  return (
    <div className="App">
      {!isLoggedIn?<IndexPage isLoggedIn = {isLoggedIn}/> : <Dashboard/>}
      
      
    </div>
  );
}

export default App;
