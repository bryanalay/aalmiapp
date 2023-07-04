import Loading from "../components/LoadingComponents/Loading"
import { LoginForm } from "../components/LoginComponents/LoginForm"

function LoginPage({login,showRegisterForm}){
    return(<div className={`bg-green-200 h-screen grid justify-center items-center`}>
        <LoginForm login={login} showRegisterForm={showRegisterForm}/>
        {/* <Loading/> */}
    </div>)
}

export { LoginPage }