
import { useEffect, useRef, useState } from "react"
import ScrollToBottom from "react-scroll-to-bottom"


export default function MessagesDashboard({ setChatMessages,chatMessages, Person, socket}){
var room = {
	level : Person.level,
	language : Person.language,

}
const lastRef = useRef(null);

	 useEffect(()=>{
		socket.on('recieve_messages', (data)=>{
			setChatMessages([...chatMessages,data])
		})

	},[socket, chatMessages])
	useEffect(()=>{
		lastRef.current?.ScrollIntoView({behavior : 'smooth'})

	},[chatMessages])


	function updateMessage(latestMsg){
		setChatMessages(latestMsg)
	}



    return(
        <div className="messagesDashboard">
			{chatMessages?<>
				<MessageContactSelector lastMessage = {chatMessages[chatMessages.length - 1].message} room ={room}/>
				<ChatInterface chatMessages={chatMessages} socket={socket} Person={Person}  sendMessage = {updateMessage} setChatMessages={setChatMessages} message = {chatMessages}/>
			</>
             : "Loading"}
        </div>
    )
}

function MessageContactSelector({room, lastMessage}){

    return(
        <div className="messageContactSelector">
            <h1>Messages</h1>
            <ConversationElement language={room.language} level = {room.level} lastMessage = {lastMessage}/>

        </div>
    )
}

function ConversationElement({language,level, lastMessage}){
    return(
        <div className="conversationElement">
            <div className="groupImg">{language[0]+level[0]}</div>
            <div className="groupNameAndLastMessage">
                <div className="groupName">{language + " " + level + "s"}</div>
                <div className="groupLastMessage">
                    {/* {lastMessage.length > 20? lastMessage.substring(0,17) + "..." : lastMessage} */}
                </div>
            </div>
        </div>
    )
}

function ChatInterface({  Person,message, chatMessages ,socket, setChatMessages}){
	const [newMessage, setNewMessage] = useState("");
	
	async function send() {

		if(newMessage.trim()){
			let msg = {}
			msg.user_id = Person.id;
			msg.first_name =  Person.first_name;
			msg.last_name = Person.last_name
			msg.message = newMessage
			msg.room = (Person.language + Person.level).toLowerCase();
			// update Message too
			// await socket.emit('send_message',msg);
			await socket.emit('new_message', msg)
			setNewMessage("");
			
		}
		
	}
	function handleTyping(e){
		setNewMessage(e.target.value)
	}

    return(
        <div className ="chatInterface">
			<ChatInterfaceHead  Person={Person}  messages = {message}/>
            <SendMessageInterface  message = {newMessage} handleTyping = {handleTyping} sendMessage = {send}/>

        </div>
    )
}

function ChatInterfaceHead({messages, Person}){

	

	

	

    return(
        <>
            <div className="chatInterfaceHead">
                {Person.language + " " + Person.level + "s"}
            </div>
            <div className="messagesPortal">
				<div className="chatMessages">
					 {messages? messages.map((user)=>
                    <EachMessage Person={Person} first_name = {user.first_name} last_name = {user.last_name} user_id = {user.user_id} message = {user.message}/>
                	) : ""}
				</div>
            </div>

	
        
        </>
       
    )
}




function SendMessageInterface({message, handleTyping, sendMessage}){

	
	let input = document.querySelector('.sendMessageInterface input');
	//keydown for enter
    return(
		
        <div className="sendMessageInterface">
            <input  value={message} placeholder="type message here" 
			onChange={handleTyping} 
			type="text" name="message" id="messageSending"
			onKeyDown={(e)=>{
				if(e.key === "Enter"){
					sendMessage(message)
					
					
				}
			}}
			/>
            {message?<button 
			onClick={async ()=>{
				await sendMessage(message)
				
				input.value = "";
			}}
			
			
			>Send</button> : ""}
        </div>
    )
}


function EachMessage({user_id, first_name, last_name, message, Person}){

	let name = first_name + " " + last_name;
    return(
        <div className= {user_id === Person.id? "eachMessage sender" : "eachMessage receiver"}>
            <div className="senderName">{user_id === Person.id? "": name}</div>
            <div className="senderMess">{message}</div>
        </div>
    )

}