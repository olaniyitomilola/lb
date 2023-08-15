const germanFlag = require('../assets/flags/german.png')
const frenchFlag = require('../assets/flags/french.png');




export default function  LoggedInNavAdd(props){

    
    const{firstName,lastName,language,level} = props.Person;
    return(
        <div className="loggedInNavAdd">
            <div className="courseAndMessageBtn">
                <button onClick={()=>props.handleActiveNav('courses')} className={props.activeNav === "courses"? "active": ""}>Courses</button>
                <button onClick={()=>props.handleActiveNav('messages')}   className={props.activeNav === "messages"? "active": ""}   >Messages</button>

            </div>
            <div className="languageAndProfile">
                <div id="language">
                    <img id="navFlag" src={language === 'French'? frenchFlag : germanFlag} alt={language} srcset="" />
                    <div>{language}</div>
                </div>
                <div id="profile">
                    <div id="img">

                    </div>
                    <div className="nameAndLevel">
                        <div id="name">{firstName + " " + lastName }</div>
                        <div id="level">{level}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

