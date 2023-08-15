import LoggedInNavAdd from "./LoggedInNavAdd"

export default function TopNav(props){


const Person = {
    firstName : "Vincent",
    lastName : "Sacrifice",
    language : "French",
    level: "Beginner"
}

    
    return(
        <div className="topNav">
            <div className="logo">LanguageBuddy</div>
            {props.isLoggedIn? <Buttons handleIndex = {props.handleIndex}/> :  <LoggedInNavAdd  Person = {Person}/>}
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