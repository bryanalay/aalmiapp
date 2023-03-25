import { RegisterForm } from "../components/RegisterComponents/RegisterForm"

function Register({registerUser,showRegisterForm}){
    return(<div className={`bg-green-200 h-screen grid justify-center items-center`} >
        <RegisterForm registerUser={registerUser} showRegisterForm={showRegisterForm}/>
        
    </div>)
}

export { Register }