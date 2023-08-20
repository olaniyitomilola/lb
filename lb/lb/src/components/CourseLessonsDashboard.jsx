import { useState } from "react"

export default function CourseLessonDashboard(){

    let course = {
        courseId: 1,
        courseBanner: "https://s3-alpha-sig.figma.com/img/9ddc/e7a7/88d97ad02e11ec8eb98bdd976ba4a64c?Expires=1693180800&Signature=UcAlsX2tB4ADcwrh23NrJN~91V2YOiLNwKsDCLjxquW73C7630XlPfJz-XSW-6A-fxL-13SzKZTK6gIL-1AfHPbgCwZ2l86JhPmXZ60qu8ECZCTwVIQNCrTDtLcuMD7IA1fBZg3XcNry-4OZqY-W694uVI~16vZ0-JFqKxg2edqS~FEZ3tiPTbchqDsBtYtcB4JTOw16UgyAI6O0SCcpyqZrM3h~L4crJtie7uOK7aRBLefULesNxmDQHWWQmW5FfV53szzZL7P5oGMNkAC8Tu5gDdo7~N~8mYSnal8ddnOiIPB9OMxsHGaowSPfeNBEdfNoi-TZfrXj5EQP1~lt0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        courseTitle: "Greetings in German",
        courseDesc: `A text that would be written about the language and will introduce students to the land, A text that would be written about the language and will introduce students to the land, A text that would be written about the language and will introduce students to the land, A text that would be written about the language and will introduce students to the land, A text that would be written about the language and will introduce students to the land`,
        courseAssessments: [
            {question: "What is 'good morning' in French?", options: ["heute", "Bitte Schon", "Guten Morgen", "Heute Morgen"], answer:  "Guten Morgen"}
        ]

    }

    const backgroundStyle = {
        
        backgroundImage: `url(${course.courseBanner})`
    }

    return(
        <div className="courseLessonDashboard">
            <div className="courseBannerAndProgress">
                <div style={backgroundStyle} className="courseBanner">

                </div>
                <div className="courseProgress">

                    The progress level guage here

                </div>
            </div>
            <div className="courseContentAndCourseLessons">
                <div className="courseContent">
                    <div className="generalIntro">
                        <div className="courseTitle">
                            {course.courseTitle}
                        </div>
                        <div className="courseDescription">
                            {course.courseDesc}
                        </div>
                    </div>
                    <CourseAssessment course = {course}/>

                    

                </div>
                <div className="courseLessons">

                </div>
            </div>
        </div>
    )
}


function CourseAssessment(props){
   const [selected, setSelected] = useState("")
   const [submission,setSubmission] = useState("Submit")
   const handleClick= (opt) =>{
        setSelected(opt)
   }
   const handleSubmission =()=>{
        if(selected === ""){
            //do nothing
        }else{
            if(selected === props.course.courseAssessments[0].answer){
                setSubmission("Correct")
            }else{
                setSubmission("Incorrect")
            }
        }
   }

    return(
        <div className="courseAssessment">
            <div className="courseQuestion">
                {props.course.courseAssessments[0].question}
            </div>
            <div className="courseOptions">
                {props.course.courseAssessments[0].options.map((opt)=>
                    <button className={selected === opt? "clicked" : ""} onClick={()=>handleClick(opt)}>{opt}</button>
                )}
            
            </div>

            <button id={submission === "Correct"? "correct" : submission === "Incorrect"? "incorrect" : ""} onClick={()=>handleSubmission()} className={selected === ""? "submitBtn" : "submitBtn selected"} >{submission}</button>
        </div>
    )
}