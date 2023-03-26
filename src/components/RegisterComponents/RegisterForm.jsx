import { useState } from "react"

function RegisterForm({registerUser,showRegisterForm}){

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

    return(<div className={`rounded-xl bg-orange-300 flex flex-col justify-center items-center p-8 w-96 gap-4`} >
        <h1 className="text-white font-bold text-[35px]">Create Account</h1>
        <input className={`rounded-none w-52 h-9 px-4 border-black border-2`} onChange={handleChangeUsername} placeholder="User"></input>
        <input className={`rounded-none w-52 h-9 px-4 border-black border-2`} onChange={handleChangePassword} placeholder="Password"></input>
        <button  className={`inline-block text-center h-10 px-4 py-2 font-semibold rounded-md bg-black text-white hover:bg-slate-800`} onClick={()=>{
            registerUser(user)
        }} >Create</button>
        <button className="font-semibold hover:text-gray-600" onClick={()=>{showRegisterForm()}} >Ya tengo cuenta</button>
    </div>)
}

export { RegisterForm }