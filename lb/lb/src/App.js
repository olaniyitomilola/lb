import { useState } from 'react';
import './App.css';
import IndexPage from './components/Index';
import Dashboard from './components/Dashboard';

function App() {
  const Person = {
      firstName : "Vincent",
      lastName : "Sacrifice",
      language : "French",
      level: "Beginner"
  }

  const [isLoggedIn,setLoggedIn] = useState(true)

   const [activeNav, setActiveNav] = useState('courses')

    function handleActiveNav(active){
        setActiveNav(active);
    }
  
  return (
    <div className="App">
      {!isLoggedIn?<IndexPage isLoggedIn = {isLoggedIn}/> : <Dashboard Person = {Person} activeNav = {activeNav} handleActiveNav ={handleActiveNav}/>}
      
      
    </div>
  );
}

export default App;
