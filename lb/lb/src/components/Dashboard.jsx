import TopNav from "./TopNav";
import CourseDashBoard from "./CourseDashBoard";
import MessagesDashboard from "./MessagesDashboard";
import CourseLessonDashboard from "./CourseLessonsDashboard";
import { useState } from "react";
import { io } from "socket.io-client";

export default function Dashboard ({activeNav, isLoggedIn, handleActiveNav, Person, courses, handleLogOut}){
    const socket = io.connect('http://localhost:3004');
    const [courseId, setCourseId] = useState('');
    const [chatMessages, setChatMessages] = useState([{
		"name": "Cara Casey",
		"text": "vel est tempor bibendum. Donec felis orci, adipiscing non, luctus",
		"user_id": "37DA29A1-C54D-E720-E984-6612366AABD8"
	}]);


    
    return(
        <div className="dashboard">
            <TopNav handleLogOut={handleLogOut} isLoggedIn = {isLoggedIn} activeNav = {activeNav} handleActiveNav = {handleActiveNav} Person={Person}/>
            {activeNav === "courses"?
            <>
            {!courseId? <CourseDashBoard chatMessages={chatMessages} setChatMessages={setChatMessages} socket ={socket} setCourseId ={setCourseId} courses = {courses} Person = {Person}/> : <CourseLessonDashboard goback = {setCourseId} courses = {courses.find((course)=>course.id === courseId)} courseId={courseId}/>}
            
            </>
             : 
             <MessagesDashboard setChatMessages={setChatMessages} Person={Person} socket={socket} chatMessages={chatMessages}/>}
        </div>
    )
}