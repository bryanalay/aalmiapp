import { RegisterForm } from "../components/RegisterComponents/RegisterForm"

function Register({registerUser,showRegisterForm}){
    return(<>
        <h1>Register Page</h1>
        {console.log('render registerform from register')}
        <RegisterForm registerUser={registerUser} />
        <button onClick={()=>{showRegisterForm()}} >Ya tengo cuenta</button>
    </>)
}

export { Register }