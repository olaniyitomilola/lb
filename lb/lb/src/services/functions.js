const Post = async (url,body)=>{
   
   try{
      let req =  await fetch(url,{
                headers :{'Content-Type' : 'application/json'},
                method: "post",
                body: JSON.stringify(body)
                })

        let res = req.json();
        return res;
   }catch(error){
    console.log(error)
   }
    
}

const Get = async (url)=>{
   
   try{
      let req =  await fetch(url,{
                headers :{'Content-Type' : 'application/json'},
                method: "get",
                
                })

        let res = req.json();
        return res;
   }catch(error){
    console.log(error)
   }
    
}

const CreateUserObject = (firstName, lastName, email, password, language, level)=>{
    return {
        firstName, lastName, email,password, level,language
    }
}

module.exports = {Post,Get,CreateUserObject};