

//handle subscription on the index page

const subscribebtn = document.querySelector('.indexBtn')

if(subscribebtn){
    let form = document.querySelector('.subscription_form')
    let firstName = document.querySelector('.firstName')
    let lastName = document.querySelector('.lastName')
    let email = document.querySelector('.email')
    let notification = document.getElementById('notification')
    let parent = document.querySelector('.container_body.index')



    subscribebtn.addEventListener('click', async ()=>{
        if(!firstName.value || !lastName.value || !email.value){
            //validate input
            notification.textContent = "All fields required"
        }else{
            let req = await fetch('./backend/api/subscribe.php',{
                method: "post",
                body: new FormData(form)
            })

            let res = await req.json()
            if(res.success){
                parent.removeChild(form)
                let success = document.createElement('div');
                success.textContent = "You are now on our Subscription List"
                parent.appendChild(success)
            }
        }
    })
}


//handle manager registration

const regBtn = document.querySelector('.container_body.sign_in #regBtn');

if(regBtn){

    let inputs = document.querySelectorAll('.container_body.sign_in input');
    const parent = document.querySelector('.container_body.sign_in');


    let form = document.querySelector('.container_body.sign_in form')
    let firstName = document.querySelector('#first_name')
    let lastName = document.querySelector('#last_name')
    let email = document.querySelector('#email')
    let notification = document.getElementById('notification')
    let password = document.getElementById('password')
    let conpass = document.getElementById('confirm_password')
    errorRemover(inputs,notification)

    regBtn.addEventListener('click', async ()=>{
        if(!firstName.value || !lastName.value || !email.value || !password.value || !conpass.value){
            notification.textContent = "All fields required"
        }else if(conpass.value !== password.value){
            notification.textContent = "Password should be the same"
        }else{
            let newForm = new FormData(form)

            let req = await fetch('./backend/api/signup.php', {
                method: "post",
                body: newForm
            })

            let res = await req.json();

            if(res.success){
                parent.removeChild(form);
                let success = document.createElement('div');
                success.textContent = "Account registered successfully, log in"
                parent.appendChild(success)
            }

            

            
        }
    })

}

//handle log in

const loginBtn = document.querySelector('.container_body.sign_in #signInBtn')

if(loginBtn){
    let form = document.querySelector('.sign_in_form')
    let inputs = document.querySelectorAll('.container_body.sign_in input');
    let email = document.querySelector('#email')
    let notification = document.getElementById('notification')
    let password = document.getElementById('password')

    errorRemover(inputs,notification);
    
    loginBtn.addEventListener('click', async ()=>{
        //input validation
        if(!email.value || !password.value){
            notification.textContent = "All Inputs required."
        }else{
            let newForm = new FormData(form)
            let req = await fetch('./backend/api/signin.php',{
                method: "post",
                body: newForm
            })
            let res = await req.json();

            if(res.success){
                window.location ="./homepage.php"
            }
        }
    })
}

const homepage = document.querySelector('.container.homepage');
//Handle all the requests and population on the home page

if(homepage){


    let numberOfTokens = document.querySelector('.box.token h2')
    let numberOfClients = document.querySelector('.box.clients h2')

     async function homepageHandler(){
        let tokens = await getTokens()
        let clients = await getClients();

        numberOfTokens.textContent = tokens.length;
        numberOfClients.textContent = clients.length;

    }

   
   homepageHandler();


}
//handle events on investment page
const investmentPage = document.querySelector('.tokenList')

if(investmentPage){
    //configure the add new token button
    const Addbtn = document.querySelector('.tokenHeaderAndAdd input')
    //to ensure you cannot add two elements at a time
    var clickAble = {state: true};
    Addbtn.addEventListener('click', async function(){

        if(clickAble.state){
            investmentPage.prepend(prependToken(investmentPage, clickAble,investmentPageHandler))
            //set to false to ensure new element cant be added while last is still active
            clickAble.state = false;

        }
    })

    async function investmentPageHandler(){
        let tokens = await getTokens();

        for(const token of tokens){
        
            renderTokenComponent(token,investmentPage, investmentPageHandler)
        }
    }

    investmentPageHandler()
}

//client list page

const clientPage = document.querySelector('.container_body.clients')

if(clientPage){
    async function clientPageHandler(){
        let clientList = document.querySelector('.clientList');
        let theClients = await getClients();
        for(const id of theClients){
            
            let eachClient = await  createClientElement(id);

            clientList.appendChild(eachClient)
            
        }
    }


    clientPageHandler()
}



//REUSEABLE FUNCTIONS


//fetchs all the toekns from the db and returns an array of tokens.
    async function getTokens(){
        let tokens = await fetch('./backend/api/getAllTokens.php');
        tokens = await tokens.json();
        return tokens
    }
//fetchs the list of subscribed clients
    async function getClients(){
        let clients = await fetch('./backend/api/getClients.php');
        clients = await clients.json();
        return clients
    }

//remove notification error

function errorRemover(elements,notification){
    elements.forEach((input)=>{
        //select allthe input fields, except the button
        if(input.type != 'submit'){
            input.addEventListener('focus',(e)=>{
                notification.textContent = " "
            })
        }
    })
}


//COMPONENTS

// Define the vanilla JavaScript component
function renderTokenComponent(token, parentElement, callBack) {
    const eachTokenDiv = document.createElement('div');
    eachTokenDiv.className = 'eachToken';

    // Token Identifier
    const tokenIdentifierDiv = document.createElement('div');
    tokenIdentifierDiv.id = 'tokenIdentifier';
    tokenIdentifierDiv.textContent = token.token_identifier;
    eachTokenDiv.appendChild(tokenIdentifierDiv);

    // Token Name
    const tokenNameDiv = document.createElement('div');
    tokenNameDiv.id = 'tokenName';
    tokenNameDiv.textContent = token.token_name;
    eachTokenDiv.appendChild(tokenNameDiv);

    // Token Category
    const tokenCategoryDiv = document.createElement('div');
    tokenCategoryDiv.id = 'tokenCategory';
    tokenCategoryDiv.textContent = token.token_category;
    eachTokenDiv.appendChild(tokenCategoryDiv);

    // Token Price
    const tokenPriceDiv = document.createElement('div');
    tokenPriceDiv.id = 'tokenPrice';
    tokenPriceDiv.textContent = "$" + token.token_price;
    eachTokenDiv.appendChild(tokenPriceDiv);

    // Risk Level
    const riskLevelDiv = document.createElement('div');
    riskLevelDiv.id = 'riskLevel';
    riskLevelDiv.textContent = token.token_risk;
    eachTokenDiv.appendChild(riskLevelDiv);

    // Buttons
    const eachTokenButtonsDiv = document.createElement('div');
    eachTokenButtonsDiv.className = 'eachTokenButtons';

    // Edit Button
    const deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = 'Delete';
    deleteButton.style.backgroundColor = "red"

    deleteButton.addEventListener('click', async ()=>{
        let req = await fetch(`./backend/api/deleteToken.php?id=${token.id}`)
        let res = await req.json()
        if(res.success){
            parentElement.textContent = "";
            callBack()
        }
        
    })

    eachTokenButtonsDiv.appendChild(deleteButton);

    // View Button
    const sendButton = document.createElement('input');
    sendButton.type = 'button';
    sendButton.value = 'View';
    sendButton.id = "viewButton"
    eachTokenButtonsDiv.appendChild(sendButton);

    //evnt listener
    sendButton.addEventListener('click', async ()=>{

        const list = await fetch(`./backend/api/subscribe.php?category=${token.token_category}`)

        let res = await list.json();

        
        
        viewClientsModal(res,parentElement,token.id)
    })

    eachTokenDiv.appendChild(eachTokenButtonsDiv);

    // Append the token component to the parent element
    parentElement.appendChild(eachTokenDiv);
}
//prepend new token

function prependToken(parent,clickAble,callBack){
    let form = document.createElement('form')
    form.className = "eachToken"
        let token_identifier = document.createElement('input')
        token_identifier.type = "text"
        token_identifier.placeholder = "BTC"
        token_identifier.name = "token_identifier"
        token_identifier.id = "tokenIdentifier"

        let token_name = document.createElement('input')
        token_name.type = "text"
        token_name.placeholder = "Bitcoin"
        token_name.name = "token_name"
        token_name.id = "tokenName"

        let token_category = document.createElement('input')
        token_category.type = "text"
        token_category.placeholder = "Bitcoin"
        token_category.name = "token_category"
        token_category.id = "tokenCategory"

        let token_price = document.createElement('input')
        token_price.type = "number"
        token_price.placeholder = "Price"
        token_price.name = "token_price"
        token_price.id = "tokenPrice"

        let token_risk = document.createElement('input')
        token_risk.type = "text"
        token_risk.placeholder = "risk"
        token_risk.name = "token_risk"
        token_risk.id = "riskLevel"

        let eachTokenButtons = document.createElement('div')
        eachTokenButtons.className = "eachTokenButtons"
            let cancelBtn = document.createElement('input')
            cancelBtn.type = "button"
            cancelBtn.value = "Cancel"
            cancelBtn.style.backgroundColor = "red"
            cancelBtn.addEventListener('click',()=>{
                clickAble.state = true;
                parent.removeChild(form)
            })

            let savebtn = document.createElement('input')
            savebtn.type = 'button'
            savebtn.value = "Save"
            savebtn.addEventListener('click', async ()=>{
                let newform = new FormData(form)
                let request = await fetch('./backend/api/addToken.php',{
                    method: 'post',
                    body: newform
                })
                let response = await request.json();

                if(response.success){
                    parent.textContent = ""
                    callBack();
                }

            })


        eachTokenButtons.append(cancelBtn,savebtn)
    
        form.append(token_identifier,token_name,token_category,token_price,token_risk, eachTokenButtons)

    return form

}


async function createClientElement(clientData) {
  const eachClientDiv = document.createElement('div');
  eachClientDiv.className = 'eachClient';

  // Client Info
  const clientInfoDiv = document.createElement('div');
  clientInfoDiv.className = 'clientInfo';

  // Client Name
  const clientNameDiv = document.createElement('div');
  clientNameDiv.className = 'clientName';
  clientNameDiv.textContent = clientData.first_name + " " + clientData.last_name;
  clientInfoDiv.appendChild(clientNameDiv);

  // Client Preferences
  const clientPreferencesUl = document.createElement('ul');
  clientPreferencesUl.className = 'clientPreferences';
  
    if(clientData.layer_1){
        const preferenceLi = document.createElement('li');
        preferenceLi.textContent = "Layer 1"
        clientPreferencesUl.appendChild(preferenceLi);
    }
    if(clientData.liquid_staking_token){
        const preferenceLi = document.createElement('li');
        preferenceLi.textContent = "Liquid Staking Token"
        clientPreferencesUl.appendChild(preferenceLi);
    }
    if(clientData.defi){
        const preferenceLi = document.createElement('li');
        preferenceLi.textContent = "Decentralized Finance"
        clientPreferencesUl.appendChild(preferenceLi);
    }

    if(clientData.layer_2){
        const preferenceLi = document.createElement('li');
        preferenceLi.textContent = "Layer 2"
        clientPreferencesUl.appendChild(preferenceLi);
    }
    if(clientData.smart_contract_platform
        ){
        const preferenceLi = document.createElement('li');
        preferenceLi.textContent = "Smart Contract Platform"
        clientPreferencesUl.appendChild(preferenceLi);
    }
  clientInfoDiv.appendChild(clientPreferencesUl);

  

  eachClientDiv.appendChild(clientInfoDiv);

  // Client Recommendations
  const clientRecomendationsDiv = document.createElement('div');
  clientRecomendationsDiv.className = 'clientRecomendations';

  const recommendationsHeading = document.createElement('h3');
  recommendationsHeading.textContent = 'Recommended Tokens';
  clientRecomendationsDiv.appendChild(recommendationsHeading);

  const recommendationsUl = document.createElement('ul');

    let form = new FormData();
    form.append('id',clientData.id)
            let req = await fetch('./backend/api/getAllTokens.php',{
                method: "post",
                body: form
            })
            let res = await req.json()

  for (const recommendation of res.message) {
    const recommendationLi = document.createElement('li');
    recommendationLi.textContent = recommendation.token_name;
    recommendationsUl.appendChild(recommendationLi);
  }
  clientRecomendationsDiv.appendChild(recommendationsUl);

  eachClientDiv.appendChild(clientRecomendationsDiv);

  return eachClientDiv;
}

//modal

function viewClientsModal(clients,parent,tokenId){
    let modal = document.createElement('div');
    modal.className = "modal";
    let sulList = document.createElement('div');
    sulList.className = "subscribers"



    for(const client of clients){
        let eachClient = document.createElement('div')
        eachClient.className = "eachSubClient";

        let clientName = document.createElement('div');
        clientName.textContent = client.first_name + " " + client.last_name;

        let sendButton = document.createElement('button');
        sendButton.textContent = "Send"

        sendButton.addEventListener('click', async ()=>{
            let form = new FormData();
            form.append('subscriber_id',client.id)
            form.append('token_id', tokenId)

            let req = await fetch('./backend/api/sendtoclient.php',{
                method: "post",
                body: form
            })

            req = await req.json();

            if(req.success){
                sendButton.style.backgroundColor = "green"
                sendButton.textContent = "SENT!!"

                setTimeout(()=>{
                    parent.removeChild(modal)
                },1000)
            }
        })

        let CancelButton = document.createElement('button');
        CancelButton.textContent = "Cancel"

        CancelButton.addEventListener('click',()=>{
            parent.removeChild(modal)
        })

        eachClient.append(clientName,sendButton,CancelButton);

        sulList.append(eachClient)
    }

    modal.appendChild(sulList);

    parent.appendChild(modal);

}


