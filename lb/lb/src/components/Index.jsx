import { useState } from 'react';
import HeroPage from './HeroPage';
import TopNav from './TopNav';
import {SignIn} from './SignIn';
import { SignUp } from './SignIn';
import LanguageSelection from './LanguageSelection';
import ExpertiseSelection from './ExpertiseSelection';
import { CreateUserObject, Post } from '../services/functions';


export default function IndexPage() {
    const[isIndexPage, setIndexPage] = useState('hero')
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cpassword,setCPassword] = useState("");
    const[regStage, setRegState] = useState('signup')
    const [language,setLanguage]= useState('')
    const [expertise,setExpertise] = useState('')
    



    //to track the stage of registration
    
  
    const handleIndex = (page) =>{
        setIndexPage(page)
    }
    const handleRegState = (state) =>{ setRegState(state)}

    const handleAccountReg = async (exp)=>{
        setExpertise(exp)
        if(firstName,lastName,email,password,cpassword,language,expertise){
            const body = CreateUserObject(firstName,lastName,email,password,language,expertise)

            const req = await Post('http://localhost:3001/user/register',body);
            console.log(req)
            if(req.success){
                alert('account registered')
            }else{
                alert('something wrong')
            }
        }
    }
    return (

    <>
        {isIndexPage === "hero"?
        <>
            <TopNav handleIndex= {handleIndex} isLoggedIn = {true}/>
            <div className='herobody'><HeroPage handleIndex = {handleIndex}/></div>
        </> :  isIndexPage === "signin"?<div className='indexPage'><SignIn handleIndex = {handleIndex}/></div> : regStage ==="signup" ? <div className='indexPage'><SignUp  firstName ={firstName} setFirstName={setFirstName} lastName = {lastName} setLastName = {setLastName} email ={email} setEmail = {setEmail} password ={password} setPassword = {setPassword} cpassword = {cpassword} setCPassword = {setCPassword}  handleRegState = {handleRegState} handleIndex = {handleIndex}/></div> :!language?<LanguageSelection setLanguage = {setLanguage}/> : <ExpertiseSelection handleAccountReg ={handleAccountReg} language={language}/>
    }
    </>
    
  );
}

