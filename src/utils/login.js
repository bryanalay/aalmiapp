import axios from "axios";
import { setLocalStorage } from "../data/localStorage";

async function postLogin(body){
    
    await axios.post('https://almiapitest.herokuapp.com/api/v1/login/',body)
    .then((res)=>{
        setLocalStorage(res.data.token,res.data.userid,body.username)
    })
    .catch((err)=>{
        console.log(err);
        return err
    })
}

export { postLogin }