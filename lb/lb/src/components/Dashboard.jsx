import TopNav from "./TopNav";
import CourseDashBoard from "./CourseDashBoard";
import MessagesDashboard from "./MessagesDashboard";
import CourseLessonDashboard from "./CourseLessonsDashboard";


export default function Dashboard (props){

    const Person = {
    firstName : "Vincent",
    lastName : "Sacrifice",
    language : "French",
    level: "Beginner"
    }
    return(
        <div className="dashboard">
            <TopNav activeNav = {props.activeNav} handleActiveNav = {props.handleActiveNav} Person={Person}/>
            {props.activeNav === "courses"? <CourseLessonDashboard handleActiveNav={props.handleActiveNav} Person={Person}/> : <MessagesDashboard/>}
        </div>
    )
}