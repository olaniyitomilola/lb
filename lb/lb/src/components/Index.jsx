import { useState } from 'react';
import HeroPage from './HeroPage';
import TopNav from './TopNav';
import {SignIn} from './SignIn';
import { SignUp } from './SignIn';
import LanguageSelection from './LanguageSelection';
import ExpertiseSelection from './ExpertiseSelection';


export default function IndexPage() {
    const[isIndexPage, setIndexPage] = useState('hero')
    //to track the stage of registration
    const[regStage, setRegState] = useState('signup')
    const [language,setLanguage]= useState(null)
  
    const handleIndex = (page) =>{
        setIndexPage(page)
    }
    const handleRegState = (state) =>{ setRegState(state)}

    const handleLanguage = (language) => setLanguage(language)
    return (

    <>
        {isIndexPage === "hero"?
        <>
            <TopNav handleIndex= {handleIndex} isLoggedIn = {true}/>
            <div className='herobody'><HeroPage handleIndex = {handleIndex}/></div>
        </> :  isIndexPage === "signin"?<div className='indexPage'><SignIn handleIndex = {handleIndex}/></div> : regStage ==="signup" ? <div className='indexPage'><SignUp handleRegState = {handleRegState} handleIndex = {handleIndex}/></div> :!language?<LanguageSelection setLanguage = {setLanguage}/> : <ExpertiseSelection language={language}/>
    }
    </>
    
  );
}

