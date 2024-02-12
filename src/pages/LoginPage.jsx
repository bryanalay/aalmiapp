import { useContext } from "react"
import Loading from "../components/LoadingComponents/Loading"
import { LoginForm } from "../components/LoginComponents/LoginForm"

function LoginPage(){

    return(<div className={`bg-green-200 h-screen grid justify-center items-center`}>
        <LoginForm />
        {/* <Loading/> */}
    </div>)
}

export { LoginPage }