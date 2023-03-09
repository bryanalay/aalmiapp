import { useState } from "react"

function RegisterForm({registerUser}){

    //const [dataRegister,setDataRegister] = useState({username:'',password:''})

    const user = {username:'',password:''}
    function handleChangeUsername(evt){        
        user.username = evt.target.value
        console.log(user);     
    }

    function handleChangePassword(evt){        
        user.password = evt.target.value   
        console.log(user);     
    }

    return(<>
        <h1>Register user</h1>
        <input  onChange={handleChangeUsername} placeholder="Usuario"></input>
        <input onChange={handleChangePassword} placeholder="Constraseña"></input>
        <button onClick={()=>{
            registerUser(user)
        }} >Create</button>
    
    </>)
}

export { RegisterForm }