
var userId = "323E690E-44B9-DF47-5941-4D7BC3B5C814"
export default function MessagesDashboard(props){
    return(
        <div className="messagesDashboard">
            <MessageContactSelector/>
            <ChatInterface/>
        </div>
    )
}

function MessageContactSelector(){
    return(
        <div className="messageContactSelector">
            <h1>Messages</h1>
            <ConversationElement language={"German"} level ="Beginner" lastMessage ={"It is a big honor to be part of this group, I really appreciate all the effort"}/>

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
    return(
        <div className="chatInterface">
            <ChatInterfaceHead/>

            <SendMessageInterface/>

        </div>
    )
}

function ChatInterfaceHead(props){
    return(
        <>
            <div className="chatInterfaceHead">
                French Beginners
            </div>
            <div className="messagesPortal">
                {messages.map((user)=>
                    <EachMessage name = {user.name} user_id = {user.user_id} text = {user.text}/>
                )}
            </div>
        
        </>
       

    
    )
}

var messages = [
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


function SendMessageInterface(){
    return(
        <div className="sendMessageInterface">
            <input type="text" name="message" id="messageSending" />
            <button>Send</button>
        </div>
    )
}


function EachMessage(props){
    return(
        <div className= {props.user_id === userId? "eachMessage sender" : "eachMessage"}>
            <div className="senderName">{props.user_id === userId? "": props.name}</div>
            <div className="senderMess">{props.text}</div>
        </div>
    )

}