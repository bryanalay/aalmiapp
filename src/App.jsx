import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { useEffect } from "react";
import { useData } from "./hooks/useData";
import { Pages } from "./pages/Pages";
import { Register } from "./pages/RegisterPage";

function App() {
  const { login, deleteToken, hayToken, token,registered,setRegistered, showRegisterForm, registerUser, deletePost } = useData();
  useEffect(() => {
    hayToken();
    if(token==true){
      setRegistered(true)
    }
  }, [login]);
  
// className="h-screen w-screen py-4 px-4 bg-slate-400"
  return (
    <div className="h-max sm:bg-amber-400 bg-blue-300">
      {registered ? (token ? <Pages deleteToken={deleteToken} deletePost={deletePost}/>: <LoginPage login={login} showRegisterForm={showRegisterForm} /> ) : <Register registerUser={registerUser} showRegisterForm={showRegisterForm}/> }
    </div>
  );
}

export default App;
