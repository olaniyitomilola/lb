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

module.exports = {Post};