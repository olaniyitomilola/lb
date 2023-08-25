
import { useEffect, useRef, useState } from "react"
import ScrollToBottom from "react-scroll-to-bottom"


//get user ID
//var userId = "323E690E-44B9-DF47-5941-4D7BC3B5C814"

export default function MessagesDashboard({ setChatMessages,chatMessages, Person, socket}){
var room = {
	level : Person.level,
	language : Person.language,

}
const lastRef = useRef(null);

	function handleMessage(data){
		console.log(chatMessages.length)
		setChatMessages((prevMessages) =>[...prevMessages,data])
	}
	 useEffect(()=>{
		socket.on('recieve_messages', handleMessage)

		return ()=> socket.off('recieve_messages',handleMessage)
	},[socket,chatMessages])
	useEffect(()=>{
		lastRef.current?.scrollIntoView({behavior : 'smooth'})

	},[chatMessages])


	function updateMessage(latestMsg){
		setChatMessages(latestMsg)
	}



    return(
        <div className="messagesDashboard">
			{chatMessages.length !== 0?<>
				<MessageContactSelector lastMessage = {chatMessages[chatMessages.length - 1].text} room ={room}/>
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
                    {lastMessage.length > 20? lastMessage.substring(0,17) + "..." : lastMessage}
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
			msg.name =  `${Person.first_name} ${Person.last_name}`;
			msg.text = newMessage
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
					 {messages.map((user)=>
                    <EachMessage Person={Person} name = {user.name} user_id = {user.user_id} text = {user.text}/>
                	)}
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


function EachMessage({user_id, name, text, Person}){
    return(
        <div className= {user_id === Person.id? "eachMessage sender" : "eachMessage receiver"}>
            <div className="senderName">{user_id === Person.id? "": name}</div>
            <div className="senderMess">{text}</div>
        </div>
    )

}