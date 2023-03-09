import { LoginForm } from "../components/LoginComponents/LoginForm"

function Login({login,showRegisterForm}){
    return(<>
        <h1>Login page</h1>
        <LoginForm login={login}/>
        <button onClick={()=>showRegisterForm()}>SignUp</button>
    </>)
}

export { Login }