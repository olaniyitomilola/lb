import { useEffect, useState } from "react"
import Calendar from "react-calendar"

export default function CourseDashBoard({chatMessages, setCourseId , setChatMessages ,handleActiveNav ,socket, courses, Person, }){
    //TODO: Authentication token to handle this 

   
        const[date,setDate] = useState(new Date());
        socket.emit('in_chat',Person)

        const handleCourse = (id)=>{
        setCourseId(id);

          
        }
       

    return(
        <div className="courseDashBoard">
            <div className="coursesPanel">
                <Greetings firstName = {Person.first_name}/>
                <div className="recommendedCourses">
                    <h2>Recommended Courses</h2>
                    <div className="coursesContainer">
                        {courses.map((course)=>
                            <CourseCard id={course.id} handClick ={handleCourse} key={course.id} img = {course.image_sources} introduction = {course.coursedescription} courseTitle = {course.coursetitle}/>
                        )}
                    </div>
                    

                </div>

                <div className="popularCourses">
                    <h2>Popular Courses</h2>
                    <div className="coursesContainer">
                        {courses.map((course)=>
                            <CourseCard id={course.id} handClick={()=> handleCourse(course.id)}  key={course.id} img = {course.image_sources} introduction = {course.coursedescription} courseTitle = {course.coursetitle}/>
                        )}
                    </div>
                    

                </div>

            </div>
            <div className="calender_call">
                <div className="calenderPortal">
                    <Calendar showNeighboringMonth={false} value={date} onChange={setDate}/>

                </div>
                <CallToChat handleActiveNav= {handleActiveNav} Person = {Person}/>
            </div>
        </div>
    )
}

function Greetings({firstName}){
    return(
        <div className="greetings">
            <h1>Hello, {firstName}</h1>
            <p>What are you learning today</p>
            
        </div>
    )
}

function CourseCard({img , handClick, courseTitle, introduction, id}){
    const backgroundStyle = {
        
        backgroundImage: `url(${img})`
    }

    return(
        <div onClick={()=>handClick(id)} className="courseCard">
            
            <div  style={backgroundStyle} className="img"></div>
            <h2>{courseTitle}</h2>
            <p>{introduction}</p>
        </div>)
}

function CallToChat ({handleActiveNav, Person}){
    return(
            <div className="callToChat">
                    <div className="blurEffect"></div>
                    <div id="conversationImg"><span></span><div></div><div></div><div></div></div>
                    <h2>Chit chat with other Buddies</h2>
                    <h3>Chat with other {Person.level + "s"} like you about your course as you go</h3>
                    <button onClick={()=>handleActiveNav('messages')}>Join Now</button>

            </div>
    )
}