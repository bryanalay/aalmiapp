import { Home } from "./HomePage"

function Pages({deleteToken, deletePost}){
    return <Home deleteToken={deleteToken} deletePost={deletePost} />
}

export { Pages }