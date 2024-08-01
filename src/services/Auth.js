import axios from "axios"

export const RegisterUser = async(user)=>{
    try{
        const response = await axios.post("https://localhost:7002/api/User",user)
        return response.status;
    }catch(ex){
        console.log(ex);
    }
}

export const LoginUser = async(user)=>{
    try{
        const response = await axios.post("https://localhost:7002/api/User/login",user)
        return response.data;
    }
    catch(err){
        console.log(err)
    }
}