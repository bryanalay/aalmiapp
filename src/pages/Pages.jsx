import { Home } from "./HomePage"

function Pages({deleteToken, deletePost}){
    return <div className={`h-max`}>
        <Home deleteToken={deleteToken} deletePost={deletePost} />
    </div>
}

export { Pages }