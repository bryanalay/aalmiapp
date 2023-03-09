import "./App.css";
import { Login } from "./pages/LoginPage";
import { useEffect } from "react";
import { useData } from "./hooks/useData";
import { Pages } from "./pages/Pages";
import { Register } from "./pages/RegisterPage";

//token example dev
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJraHcwIiwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsInBhc3N3b3JkIjoiJDJiJDA1JEh2ZzlnRk9XYkd6alcyYmRYNURxWnUxZkdVbnJianhKQzZtQ295N0FSbTF5MmwwQUVtR0VPIiwiaWF0IjoxNjc1ODg4NDkxfQ.CLN11C4abgc3ObtyG3uU_SXYQOFhygSYskYgvEVckVI

function App() {
  const { login, deleteToken, hayToken, token,register,setRegister, showRegisterForm, registerUser, deletePost } = useData();
  useEffect(() => {
    hayToken();
    if(token==true){
      setRegister(true)
    }
  }, [login]);

  return (
    <div className="App">
      {register ? (token ? <Pages deleteToken={deleteToken} deletePost={deletePost}/>: <Login login={login} showRegisterForm={showRegisterForm} /> ) : <Register registerUser={registerUser} showRegisterForm={showRegisterForm}/> }
    </div>
  );
}

export default App;
