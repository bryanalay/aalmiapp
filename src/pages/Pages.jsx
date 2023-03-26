import { Home } from "./HomePage"

function Pages({deleteToken, deletePost}){
    return <div className={`p-4 h-screen`}>
        <Home deleteToken={deleteToken} deletePost={deletePost} />
    </div>
}

export { Pages }