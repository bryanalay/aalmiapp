import axios from "axios";

async function postRegister( body){
    
    await axios.post('https://almiapitest.herokuapp.com/api/v1/user/',body)
    .then((res)=>{
        console.log('postRegister response: ',res);
    })
    .catch((err)=>{
        return err
    })
}

export { postRegister }