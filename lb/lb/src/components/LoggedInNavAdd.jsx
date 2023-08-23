const germanFlag = require('../assets/flags/german.png')
const frenchFlag = require('../assets/flags/french.png');




export default function  LoggedInNavAdd(props){

    
    return(
        <div className="loggedInNavAdd">
            <div className="courseAndMessageBtn">
                <button onClick={()=>props.handleActiveNav('courses')} className={props.activeNav === "courses"? "active": ""}>Courses</button>
                <button onClick={()=>props.handleActiveNav('messages')}   className={props.activeNav === "messages"? "active": ""}   >Messages</button>

            </div>
            <div className="languageAndProfile">
                <div id="language">
                    <img id="navFlag" src={props.Person.language === 'French'? frenchFlag : germanFlag} alt={props.Person.language} srcset="" />
                    <div>{props.Person.language}</div>
                </div>
                <div id="profile">
                    <div id="img">

                    </div>
                    <div className="nameAndLevel">
                        <div id="name">{props.Person.first_name + " " + props.Person.last_name }</div>
                        <div id="level">{props.Person.level}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

