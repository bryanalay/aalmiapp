import { RegisterForm } from "../components/RegisterComponents/RegisterForm"

function RegisterPage({registerUser}){
    return(<div className={`bg-green-200 h-screen grid justify-center items-center`} >
        <RegisterForm registerUser={registerUser}/>
        
    </div>)
}

export { RegisterPage }