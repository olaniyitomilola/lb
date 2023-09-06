import LoggedInNavAdd from "./LoggedInNavAdd"

export default function TopNav({isLoggedIn, handleActiveNav, handleIndex, activeNav, Person, handleLogOut}){
//DB: Person Object needed here
    
    return(
        <div className="topNav">
            <div className="logo">LanguageBuddy</div>
            {!isLoggedIn? <Buttons handleIndex = {handleIndex}/> :  <LoggedInNavAdd handleLogOut={handleLogOut} activeNav = {activeNav} handleActiveNav = {handleActiveNav} Person = {Person}/>}
        </div>
    )
}

function Buttons({handleIndex}){

    return(
        <div className="buttons">
            <button onClick={()=> handleIndex('signin')}>Log In</button>
            <button onClick={()=> handleIndex('signup')} id="signUpbtn">Sign Up</button>
        </div>
    )
}