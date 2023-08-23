import { useState } from "react"
import { Post,Get } from "../services/functions";
import { setAccessToken } from "../services/tokenService";
import { Loader } from "./Loader";

//regex email pattern
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const namePattern = /^[A-Za-z\- ]+$/;



export  function SignIn(props){

    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("")
    const[error,setError] = useState("")
    


    const handleTypingEmail = (e)=>{
        setEmail(e.target.value)
        setError("")
    }
    const handleTypingPassword = (e)=>{
        setPassword(e.target.value)
        setError("")
    }
    //input validation
    const handleClick = async ()=>{
        if(!email){
            setError("Email is required")
            return
        } 
        if(!password){
            setError("Password is required")
            return
        }
        //validate email format
        if(!emailPattern.test(email)){
            setError("Invalid Email Format")
            return
        }

        let body = {
            email : email,
            password : password
        }

        const req = await Post("/user/login", body);

        if(req.success){
            setAccessToken(req.token)
            try {
                const details = await Get('/');
                if(details.success){
                    props.setLoading(true)
                    props.setLoggedIn(true)
                    props.setUserDetails(details.details)
                    props.setUserCourses(details.courses)
                    props.setLoading(false)
                    
                }
                
                
            } catch (error) {
                console.log(error)
            }
            
            
            
        }
        else{
            //setError(req.message)
            setError(req.message.response.data.message);
        }

        
    

    }


    return(
        <div className="signIn">
            <div onClick={()=>props.handleIndex('hero')} className="logo sign ">
                LanguageBuddy
            </div>
            <form className="signInForm">
                <h2>Welcome back</h2>
                <p>Resume your learning</p>
                <p>Don't have an account? <span onClick={()=>props.handleIndex('signup')}>Create account</span></p>
                <label htmlFor="email">Email Address</label>
                <input onChange={handleTypingEmail} type="email" value={email} name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input onChange={handleTypingPassword} type="password" value={password} name="" id="" />
                <div className={error? "error active" : "error"}>{error}</div>
                <input onClick={()=> handleClick()} type="button" value="Resume learning" />

            </form>
        </div>
    )
}

export  function SignUp(props){
    const [error,setError] = useState("");
     const handleTyping = (e,setter)=>{
        setter(e.target.value)
        setError("")
    }
    const removeAllValues = ()=>{
        props.setCPassword("")
        props.setEmail("")
        props.setFirstName("")
        props.setPassword("")
        props.setLastName("");
    }
    const handleSubmit = async ()=>{
        if(!props.firstName){
            setError("First Name required")
            return
        } 
        if(!props.lastName){
            setError("Last Name required")
            return
        }
        if(!props.email){
            setError("Email required")
            return
        }
         if(!props.password || !props.cpassword){
            setError("Password required")
            return
        } 

        //validate name input
        if(!namePattern.test(props.firstName) || !namePattern.test(props.lastName)){
            setError("Invalid name format")
            return;
        }
        
        if(props.password !== props.cpassword){
            setError("Password should be the same")
            return
        }
        if(props.password.length < 6){
            setError("Password cannot be less than 6 characters")
            return
        }
        //email pattern
        if(!emailPattern.test(props.email)){
            setError("Invalid Email Pattern")
            return
        }
        //Verify that user account
        let checkUser = await Get(`http://localhost:3001/user/register/${props.email}`)

        if(!checkUser.success){
            setError(checkUser.message)
        }else{
            props.handleRegState('language-selection')
        }

        
    }
   
    return(
        <div className="signIn">
            <div onClick={()=>props.handleIndex('hero')} className="logo sign ">
                LanguageBuddy
            </div>
            <form className="signInForm">
                <h2>Create an account to experience community learning</h2>
                
                <p>Already have an account? <span onClick={()=>{props.handleIndex('signin');removeAllValues()}}>Log In</span></p>
                <label htmlFor="firstName">First Name</label>
                <input onChange={(e)=>handleTyping(e,props.setFirstName)} type="text" name="firstName" id="firstName" value={props.firstName} />
                <label htmlFor="lastName">Last Name</label>
                <input value = {props.lastName} onChange={(e)=>handleTyping(e,props.setLastName)} type="text" name="lastName" id="lastName" value={props.lastName} />
                <label htmlFor="email">Email</label>
                <input onChange={(e)=>handleTyping(e,props.setEmail)} value={props.email} type="email" name="email" id="email" value={props.email}/>
                <label htmlFor="password">Password</label>
                <input onChange={(e)=>handleTyping(e,props.setPassword)} value ={props.password} type="password" name="password" id="password" value={props.password} />
                <label htmlFor="conpassword">Confirm Password</label>
                <input onChange={(e)=>handleTyping(e,props.setCPassword)} value ={props.cpassword} type="password" name="conpassword" id="cpassword" value = {props.confirmPassword} />
                <div className={error?"error active" : 'error'}>{error}</div>
                <input onClick={()=> handleSubmit()} type="button" value="Create my account" />

            </form>
        </div>
    )

}

  
