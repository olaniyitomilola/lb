import axios from "axios";
import { getAccessToken } from "./tokenService";


const API = axios.create({
    baseURL: `http://localhost:3001`,
})
API.interceptors.request.use((config)=>{
    const token = getAccessToken();

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
})
export const Post = async (url,body)=>{
   
   try{
      let req =  await API.post(url,body);

        let res = await  req.data
        
        return res;
   }catch(error){
    console.log(error)
    return {success : false, message : error}
   }
    
}

export const Get = async (url)=>{
    let res
   try{
      let req =  await API.get(url)

        res = req.data;
        return res;
   }catch(error){
    console.log(error)
   }
   finally{
    console.log(res)
   }
    
}

export const CreateUserObject = (firstName, lastName, email, password, language, level)=>{
    return {
        firstName, lastName, email,password, level,language
    }
}


