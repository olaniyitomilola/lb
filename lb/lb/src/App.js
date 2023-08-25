import { useEffect, useState, CSSProperties } from 'react';
import './App.css';
import IndexPage from './components/Index';
import Dashboard from './components/Dashboard';
import { getAccessToken,removeAccessToken } from './services/tokenService';
import { Loader } from './components/Loader';
import { Get } from './services/functions';



function App() {
  
  const [isLoggedIn,setLoggedIn] = useState('')
  const [loading,setLoading] = useState(true)
  const [activeNav, setActiveNav] = useState('courses')
  const [userData, setUserData] = useState ([])
  const [userDetails,setUserDetails] = useState([]);
  const [userCourses, setUserCourses] = useState([]);

  

  useEffect(()=>{

    const checkLoggedin = async()=>{
    
      const token = getAccessToken()
      if(!token){
        setLoggedIn(false);
        setLoading(false)
      } else{
        try {
          console.log('getting details')
          const user = await Get('/');

          if(user.success){
              setUserDetails(user.details);
              setUserCourses(user.courses);
              setLoggedIn(true)
              setLoading(false)
          }else{
            console.log(user.message)
            removeAccessToken();
            setLoading(false);
            setLoggedIn(false);
          }
          
        } catch (error) {
          console.log(error)
          removeAccessToken();
          setLoading(false);
          setLoggedIn(false);
        }
      }
         
        


  }

  checkLoggedin();
     
  },[])

  function handleActiveNav(active){
        setActiveNav(active);
    }
  
  return (
    <div className="App">

      {loading? <Loader loading={loading}/>
      
      : isLoggedIn === false? <IndexPage setLoading = {setLoading} setLoggedIn = {setLoggedIn} isLoggedIn = {isLoggedIn}  setUserDetails={setUserDetails} setUserCourses={setUserCourses} /> : <Dashboard isLoggedIn = {isLoggedIn}  courses = {userCourses} Person = {userDetails} activeNav = {activeNav} handleActiveNav ={handleActiveNav}/>}
      
      
    </div>
  );
}

export default App;
