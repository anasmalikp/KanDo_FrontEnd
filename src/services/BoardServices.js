import axios from "axios"
import Cookies from "js-cookie";

export const GetAllBoards = async()=>{
    try{
        const response = await axios.get(`https://localhost:7002/api/Board?token=${Cookies.get('token')}`)
        return response.data;
    }
    catch(err){
        console.log(err)
    }
}

export const CreateNewBoard = async(boardname) =>{
    try{
        const response = await axios.post(`https://localhost:7002/api/Board/create_board?token=${Cookies.get('token')}`,{boardname})
        return response.data;
    }
    catch(err){
        console.log(err)
    }
}