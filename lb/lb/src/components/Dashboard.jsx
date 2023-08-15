import TopNav from "./TopNav";
import CourseDashBoard from "./CourseDashBoard";
import MessagesDashboard from "./MessagesDashboard";

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
            {props.activeNav === "courses"? <CourseDashBoard handleActiveNav={props.handleActiveNav} Person={Person}/> : <MessagesDashboard/>}
        </div>
    )
}