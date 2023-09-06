const germanFlag = require('../assets/flags/german.png')
const frenchFlag = require('../assets/flags/french.png');




export default function  LoggedInNavAdd({handleActiveNav, Person, activeNav, handleLogOut}){

    
    return(
        <div className="loggedInNavAdd">
            <div className="courseAndMessageBtn">
                <button onClick={()=>handleActiveNav('courses')} className={activeNav === "courses"? "active": ""}>Courses</button>
                <button onClick={()=>handleActiveNav('messages')}   className={activeNav === "messages"? "active": ""}   >Messages</button>

            </div>
            <div className="languageAndProfile">
                <div id="language">
                    <img id="navFlag" src={Person.language === 'French'? frenchFlag : germanFlag} alt={Person.language} srcset="" />
                    <div>{Person.language}</div>
                </div>
                <div id="profile">
                    <div id="img">

                    </div>
                    <div className="nameAndLevel">
                        <div id="name">{Person.first_name + " " + Person.last_name }</div>
                        <div id="level">{Person.level}</div>
                        <a onClick={handleLogOut} href='#'>log out</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

