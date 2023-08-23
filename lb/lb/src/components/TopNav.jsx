import LoggedInNavAdd from "./LoggedInNavAdd"

export default function TopNav(props){
//DB: Person Object needed here
    
    return(
        <div className="topNav">
            <div className="logo">LanguageBuddy</div>
            {!props.isLoggedIn? <Buttons handleIndex = {props.handleIndex}/> :  <LoggedInNavAdd activeNav = {props.activeNav} handleActiveNav = {props.handleActiveNav} Person = {props.Person}/>}
        </div>
    )
}

function Buttons(props){

    return(
        <div className="buttons">
            <button onClick={()=> props.handleIndex('signin')}>Log In</button>
            <button onClick={()=> props.handleIndex('signup')} id="signUpbtn">Sign Up</button>
        </div>
    )
}