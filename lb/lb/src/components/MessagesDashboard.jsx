
import { useEffect, useRef, useState } from "react"

var bigmessage = [
	{
		"name": "Cara Casey",
		"text": "vel est tempor bibendum. Donec felis orci, adipiscing non, luctus",
		"user_id": "37DA29A1-C54D-E720-E984-6612366AABD8"
	},
	{
		"name": "Lev Harding",
		"text": "semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices",
		"user_id": "54BCE335-3271-A4FF-4014-4453D46D4FE9"
	},
	{
		"name": "Valentine Carter",
		"text": "Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla.",
		"user_id": "52464A06-2D92-9EF5-B737-EF3D41C6A7F6"
	},
	{
		"name": "Glenna Wallace",
		"text": "nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam",
		"user_id": "778C54AC-71C0-FDED-6B08-E222E24718DA"
	},
	{
		"name": "Ginger Carr",
		"text": "risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed",
		"user_id": "323E690E-44B9-DF47-5941-4D7BC3B5C814"
	},
	{
		"name": "Ginger Carr",
		"text": "risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed",
		"user_id": "323E690E-44B9-DF47-5941-4D7BC3B5C814"
	},
	{
		"name": "Ginger Carr",
		"text": "risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed",
		"user_id": "323E690E-44B9-DF47-5941-4D7BC3B5C814"
	},
	{
		"name": "Lev Harding",
		"text": "semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices",
		"user_id": "54BCE335-3271-A4FF-4014-4453D46D4FE9"
	},
	{
		"name": "Valentine Carter",
		"text": "Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla.",
		"user_id": "52464A06-2D92-9EF5-B737-EF3D41C6A7F6"
	},
	{
		"name": "Glenna Wallace",
		"text": "nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam",
		"user_id": "778C54AC-71C0-FDED-6B08-E222E24718DA"
	},
	{
		"name": "Ginger Carr",
		"text": "risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed",
		"user_id": "323E690E-44B9-DF47-5941-4D7BC3B5C814"
	}
]


//get user ID
var userId = "323E690E-44B9-DF47-5941-4D7BC3B5C814"

export default function MessagesDashboard(props){

var room = {
	level : "Beginner",
	language : "French",

}

const[messages,setMessages] = useState([])

useEffect(()=>{
	setMessages(bigmessage)
},[])

function updateMessage(latestMsg){
	setMessages(latestMsg)
}


    return(
        <div className="messagesDashboard">
			{messages.length?<>
			<MessageContactSelector lastMessage = {messages[messages.length - 1].text} room ={room}/>
            <ChatInterface  sendMessage = {updateMessage} message = {messages}/>
			</>
             : "Loading"}
        </div>
    )
}

function MessageContactSelector(props){
    return(
        <div className="messageContactSelector">
            <h1>Messages</h1>
            <ConversationElement language={props.room.language} level = {props.room.level} lastMessage = {props.lastMessage}/>

        </div>
    )
}

function ConversationElement(props){
    return(
        <div className="conversationElement">
            <div className="groupImg">{props.language[0]+props.level[0]}</div>
            <div className="groupNameAndLastMessage">
                <div className="groupName">{props.language + " " + props.level + "s"}</div>
                <div className="groupLastMessage">
                    {props.lastMessage.length > 20? props.lastMessage.substring(0,17) + "..." : props.lastMessage}
                </div>
            </div>
        </div>
    )
}

function ChatInterface(props){
	const [newMessage, setNewMessage] = useState("");
	function send() {

		if(newMessage.trim()){
			let msg = {}
			msg.user_id = userId;
			msg.name = "Ginger Carr";
			msg.text = newMessage
			//update Message too
		//	bigmessage.push(msg);
			bigmessage.push(msg)
			props.sendMessage([...bigmessage])
			setNewMessage("");
			
		}
		
	}
	function handleTyping(e){
		setNewMessage(e.target.value)
	}

    return(
        <div className ="chatInterface">
            <ChatInterfaceHead  messages = {props.message}/>

            <SendMessageInterface  message = {newMessage} handleTyping = {handleTyping} sendMessage = {send}/>

        </div>
    )
}

function ChatInterfaceHead(props){

	const chatMessagesRef = useRef(null);

	const scrollToBottom =()=>{
		chatMessagesRef.current?.scrollIntoView({behavior : "smooth"})
	}
	

	useEffect(()=>{
		scrollToBottom();
	},[])


    return(
        <>
            <div className="chatInterfaceHead">
                French Beginners
            </div>
            <div className="messagesPortal">
				<div className="chatMessages">
					 {props.messages.map((user)=>
                    <EachMessage name = {user.name} user_id = {user.user_id} text = {user.text}/>
                	)}
				</div>
				<div ref={chatMessagesRef} className="dummy"></div>
               
            </div>
        
        </>
       
    )
}




function SendMessageInterface(props){

	
	let input = document.querySelector('.sendMessageInterface input');
	//keydown for enter
    return(
		
        <div className="sendMessageInterface">
            <input  value={props.message} placeholder="type message here" 
			onChange={props.handleTyping} 
			type="text" name="message" id="messageSending"
			onKeyDown={(e)=>{
				if(e.key === "Enter"){
					props.sendMessage(props.message)
					
					
				}
			}}
			/>
            {props.message?<button 
			onClick={()=>{
				props.sendMessage(props.message)
				
				input.value = "";
			}}
			
			
			>Send</button> : ""}
        </div>
    )
}


function EachMessage(props){
    return(
        <div className= {props.user_id === userId? "eachMessage sender" : "eachMessage receiver"}>
            <div className="senderName">{props.user_id === userId? "": props.name}</div>
            <div className="senderMess">{props.text}</div>
        </div>
    )

}