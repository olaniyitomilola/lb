import { useEffect, useState } from "react"
import Calendar from "react-calendar"

export default function CourseDashBoard(props){
    //TODO: Authentication token to handle this
   

  

    

   
        const[date,setDate] = useState(new Date());

    return(
        <div className="courseDashBoard">
            <div className="coursesPanel">
                <Greetings firstName = {props.Person.first_name}/>
                <div className="recommendedCourses">
                    <h2>Recommended Courses</h2>
                    <div className="coursesContainer">
                        {props.courses.map((course)=>
                            <CourseCard key={course.id} img = {course.image_sources} introduction = {course.coursedescription} courseTitle = {course.coursetitle}/>
                        )}
                    </div>
                    

                </div>

                <div className="popularCourses">
                    <h2>Popular Courses</h2>
                    <div className="coursesContainer">
                        {props.courses.map((course)=>
                            <CourseCard key={course.id} img = {course.image_sources} introduction = {course.coursedescription} courseTitle = {course.coursetitle}/>
                        )}
                    </div>
                    

                </div>

            </div>
            <div className="calender_call">
                <div className="calenderPortal">
                    <Calendar showNeighboringMonth={false} value={date} onChange={setDate}/>

                </div>
                <CallToChat handleActiveNav= {props.handleActiveNav} Person = {props.Person}/>
            </div>
        </div>
    )
}

function Greetings(props){
    return(
        <div className="greetings">
            <h1>Hello, {props.firstName}</h1>
            <p>What are you learning today</p>
            
        </div>
    )
}

function CourseCard(props){
    const backgroundStyle = {
        
        backgroundImage: `url(${props.img})`
    }

    return(
        <div className="courseCard">
            
            <div  style={backgroundStyle} className="img"></div>
            <h2>{props.courseTitle}</h2>
            <p>{props.introduction}</p>
        </div>)
}

function CallToChat (props){
    return(
            <div className="callToChat">
                    <div className="blurEffect"></div>
                    <div id="conversationImg"><span></span><div></div><div></div><div></div></div>
                    <h2>Chit chat with other Buddies</h2>
                    <h3>Chat with other {props.Person.level + "s"} like you about your course as you go</h3>
                    <button onClick={()=>props.handleActiveNav('messages')}>Join Now</button>

            </div>
    )
}