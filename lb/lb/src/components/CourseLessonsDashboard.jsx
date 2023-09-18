import { useEffect, useState } from "react"
import { Get, Post } from "../services/functions";
import { Loader } from "./Loader";

export default function CourseLessonDashboard(props){


    

    const stBackgroundImage = (img)=>{
        const backgroundStyle = {
        
        backgroundImage: `url(${img})`
        }

        return backgroundStyle;
    }
    const[assessments,setAssements] = useState([]);
    const[loading,setLoading] = useState(true)
    const [activeCourse, setActiveCourse] = useState(null);
    const [submission,setSubmission] = useState("Submit")
    const [selected, setSelected] = useState("")
    const [answeredQ,setAnsweredQ] = useState(new Map());
    const [answeredAss, setAnsweredAss] = useState([]);


     useEffect(()=>{
        async function getAssessments(){
          const courses =  await Get(`/courses/${props.courseId}`);

          return courses 
        }
        getAssessments()
        .catch(err=>console.log(err))
        .then((res)=>{
          if(res.success){
            setAssements(res.courses)
            
          }else{
            //TODO: handle error later
          }
        })   
     },[])

     useEffect(()=>{
        //get the assessments the user has already done
        async function getAssessments(){
          const courses = await Get(`/course/assessments/${props.courses.id}`);
          return courses 
        }

        getAssessments()
        .catch(err=>console.log(err))
        .then((result)=>{
            
            result.assessments.forEach((assessments)=>{
                setAnsweredAss(answeredQ.set(assessments.id,true))
            })
        })

     },[answeredQ])

     function handleAnswer(courseId){
        setAnsweredQ(answeredQ.set(courseId,true))
     }

     useEffect(()=>{
        if(assessments.length > 0){
            setActiveCourse(assessments[0])
            setLoading(false);
        }
     },[assessments])
    return(
        <>
            {
                loading? <Loader loading= {loading}/> :
                 <div className="courseLessonDashboard">
                    <div className="courseBannerAndProgress">
                        <div style={stBackgroundImage(props.courses.image_sources)} className="courseBanner">
                            <button onClick={()=>props.goback('')} >Go Back</button>
                        </div>
                        <div className="courseProgress">
                            <div className="answerd"><span>{answeredQ.size}</span>/10</div>
                        

                        </div>
                    </div>
                    <div className="courseContentAndCourseLessons">
                        <div className="courseContent">
                            <div className="generalIntro">
                                <div className="courseTitle">
                                    {props.courses.coursetitle}
                                </div>
                                <div className="courseDescription">
                                    {props.courses.coursedescription}
                                </div>
                            </div>
                            <CourseAssessment answeredQ= {answeredQ} handleAnswer = {handleAnswer} selected={selected} setSelected = {setSelected} submission = {submission} setSubmission = {setSubmission} course = {activeCourse}/>
                        </div>
                        <div className="courseLessons">
                            <div className="lessonWrapper">
                                {assessments.map((assessment)=> <CourseLessons answeredQ = {answeredQ} setAnsweredQ = {setAnsweredQ} setSubmission ={setSubmission} setActiveCourse = {setActiveCourse} course={assessment}/>)}
                            </div>
                            
                        </div>
                    </div>
                </div>
            }
        
        </>
       
    )
}


function CourseAssessment(props){

    const[done,setDone] = useState(false); 

    useEffect(()=>{
        props.answeredQ.has(props.course.id)? setDone(true) : setDone(false)
    },[props.answeredQ])
   const handleClick= (opt) =>{
        props.setSelected(opt)
   }
   const handleSubmission = async()=>{
        if(props.selected === "" || done){
            //do nothing
        }else{
            if(props.selected === props.course.correct_answer){
                props.setSubmission("Correct")
                setDone(true)
                props.handleAnswer(props.course.id);
                try {
                     let req = await Post(`/course/assessments/${props.course.id}`);

                    console.log(req)
                    
                } catch (error) {
                    console.log(error.message)
                }
               



            }else{
                props.setSubmission("Incorrect")

                setTimeout(()=>{
                    props.setSubmission("Submit")
                },500)
            }
            props.setSelected("");
        }
        
   }

    return(
        <div className="courseAssessment">
            <div className="courseQuestion">
                {props.course.question}
            </div>
            <div className="courseOptions">
        
                {[props.course.option_a,props.course.option_b,props.course.option_c, props.course.option_d].map((opt)=>
                    <button className={props.selected === opt? "clicked" : ""} onClick={()=>handleClick(opt)}>{opt}</button>
                )}
            
            </div>

            <button id={props.submission === "Correct"? "correct" : props.submission === "Incorrect"? "incorrect" : ""} onClick={()=>handleSubmission()} className={props.selected === ""? "submitBtn" : "submitBtn selected"} >{props.submission}</button>
        </div>
    )
}


function CourseLessons(props){
    return (
        <div onClick={()=>{
            props.setActiveCourse(props.course)
            props.setSubmission("Submit");
        
        } 

        } className={props.answeredQ.has(props.course.id)? "eachLesson answered ": "eachLesson"} >
            {`Lesson ${props.course.id % 10 === 0? 10 : props.course.id % 10}`}
        </div>
    )
}