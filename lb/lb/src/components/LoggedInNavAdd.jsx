import { useState } from "react";
const germanFlag = require('../assets/flags/german.png')
const frenchFlag = require('../assets/flags/french.png');




export default function  LoggedInNavAdd(props){

    const [activeNav, setActiveNav] = useState('courses')

    function handleActiveNav(active){
        setActiveNav(active);
    }
    const{image,firstName,lastName,language,level} = props.Person;
    return(
        <div className="loggedInNavAdd">
            <div className="courseAndMessageBtn">
                <button onClick={()=>handleActiveNav('courses')} className={activeNav === "courses"? "active": ""}>Courses</button>
                <button onClick={()=>handleActiveNav('messages')}   className={activeNav === "messages"? "active": ""}   >Messages</button>

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

