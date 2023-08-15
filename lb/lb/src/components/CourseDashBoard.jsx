import { useState } from "react"
import Calendar from "react-calendar"

export default function CourseDashBoard(props){

    let popularCourses = [
        {
            courseTitle: "Introduction to French",
            introduction: "A text that would be written about the language and will introduce students to the land",
            img: "https://s3-alpha-sig.figma.com/img/9ddc/e7a7/88d97ad02e11ec8eb98bdd976ba4a64c?Expires=1693180800&Signature=UcAlsX2tB4ADcwrh23NrJN~91V2YOiLNwKsDCLjxquW73C7630XlPfJz-XSW-6A-fxL-13SzKZTK6gIL-1AfHPbgCwZ2l86JhPmXZ60qu8ECZCTwVIQNCrTDtLcuMD7IA1fBZg3XcNry-4OZqY-W694uVI~16vZ0-JFqKxg2edqS~FEZ3tiPTbchqDsBtYtcB4JTOw16UgyAI6O0SCcpyqZrM3h~L4crJtie7uOK7aRBLefULesNxmDQHWWQmW5FfV53szzZL7P5oGMNkAC8Tu5gDdo7~N~8mYSnal8ddnOiIPB9OMxsHGaowSPfeNBEdfNoi-TZfrXj5EQP1~lt0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            courseTitle: "Greetings in French",
            introduction: "A text that would be written about the language and will introduce students to the land",
            img: "https://s3-alpha-sig.figma.com/img/4f26/9f11/93c61f7859854a377edc7a9aeda589cb?Expires=1693180800&Signature=NsRd7YcuYUUhaKn6ZyOyZ5M5K8k8v6f6JWfT2EYhINsYa3YMmMiHD32pEvsNIjgCyfwUjkSgz8h922baXXfS09rYZfeDCxz5BbkL-FL8tNWgc8~d4O~OOxDPZut52vAnY7NyE8d55kxhDxng8V3sDQiRxZQf5zYsVgn6K1tOmW8W6Q-1zBwXjm6hOxxjYyarKZnW8y77CoVfhULVYsmmRiRP38MMhJciX0OFwZHiOpJDGIQvMZE-9J-sZIfbWdjs9sb4o7wND2cFJT2Lf4exM2SRdIntImZ3SsOdbyAG5M-30v2grwtYfBvSuYbZQjKXyNqtDu1KmUJjc90fCwTavQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            courseTitle: "Nouns in French",
            introduction: "A text that would be written about the language and will introduce students to the land",
            img: "https://s3-alpha-sig.figma.com/img/2537/280d/2c676565323a9892716bab60d47541e8?Expires=1693180800&Signature=T5~aRyv33Zx28vUOjZQMTc1BT8aHqEf~yD25SMGaSNP9P9kfGabXo-1kwwzlw9tVzzuq6-GUD8wOMtM3cPFi93bT7izsL3gcWGo43TzB2RkZquOsaC6JFzoVYkXwpi5l6I71dM4kjMXfDg7~2VT7Q4cXucgB73kdI9FyiuAU6EfRsRNVi~7~B7GUQt1KTUht8Ky7QdNcO~yhhUIc4bvXm05BM3~en8FpYUD433v9SaVYgEfQJ4QT0T50VOlwo5N0dcxOkMvztyWu5lWj9W-TBgWzr5PGQXllD5YQCuY7elwp8-FsLN4B6TjtllaVsjJflhQOFh67~70IiMOepE4THA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
    ]
        const[date,setDate] = useState(new Date());

    return(
        <div className="courseDashBoard">
            <div className="coursesPanel">
                <Greetings firstName = {props.Person.firstName}/>
                <div className="recommendedCourses">
                    <h2>Recommended Courses</h2>
                    <div className="coursesContainer">
                        {popularCourses.map((course)=>
                            <CourseCard img = {course.img} introduction = {course.introduction} courseTitle = {course.courseTitle}/>
                        )}
                    </div>
                    

                </div>

                <div className="popularCourses">
                    <h2>Popular Courses</h2>
                    <div className="coursesContainer">
                        {popularCourses.map((course)=>
                            <CourseCard img = {course.img} introduction = {course.introduction} courseTitle = {course.courseTitle}/>
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