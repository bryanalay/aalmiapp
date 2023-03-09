import { getPosts } from "../../utils/posts";

function LoginForm({login}){
    const user = {username:'',password:''}
    function handleChangeUsername(evt){        
        user.username = evt.target.value
        console.log(user);     
    }

    function handleChangePassword(evt){        
        user.password = evt.target.value   
        console.log(user);     
    }

    const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJraHcwIiwidXNlcm5hbWUiOiJ0ZXN0dXNlciIsInBhc3N3b3JkIjoiJDJiJDA1JEh2ZzlnRk9XYkd6alcyYmRYNURxWnUxZkdVbnJianhKQzZtQ295N0FSbTF5MmwwQUVtR0VPIiwiaWF0IjoxNjc1ODg4NDkxfQ.CLN11C4abgc3ObtyG3uU_SXYQOFhygSYskYgvEVckVI'
    
    return(<>
        <h1>Login</h1>
        <input onChange={handleChangeUsername} placeholder="Usuario"></input>
        <input onChange={handleChangePassword} placeholder="Constraseña"></input>
        <button onClick={()=>{
            login(user)
        }} >Entrar</button>
    
        <button onClick={()=>{
            getPosts(token)
        }} >get posts</button>
    </>)
}

export { LoginForm }