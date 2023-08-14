

export default function TopNav(props){
    
    return(
        <div className="topNav">
            <div className="logo">LanguageBuddy</div>
            {props.isLoggedIn? <Buttons handleIndex = {props.handleIndex}/> : ""}
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