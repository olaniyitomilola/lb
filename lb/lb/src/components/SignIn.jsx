export  function SignIn(props){
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
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="" />

                <input type="button" value="Resume learning" />

            </form>
        </div>
    )
}

export  function SignUp(props){
    return(
        <div className="signIn">
            <div onClick={()=>props.handleIndex('hero')} className="logo sign ">
                LanguageBuddy
            </div>
            <form className="signInForm">
                <h2>Create an account to experience community learning</h2>
                
                <p>Already have an account? <span onClick={()=>props.handleIndex('signin')}>Log In</span></p>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <label htmlFor="conpassword">Confirm Password</label>
                <input type="password" name="conpassword" id="password" />

                <input onClick={()=> props.handleRegState('select-language')} type="button" value="Create my account" />

            </form>
        </div>
    )

}

  
