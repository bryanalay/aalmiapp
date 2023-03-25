import { Home } from "./HomePage"

function Pages({deleteToken, deletePost}){
    return <div className={`bg-cyan-200 p-4`}>
        <Home deleteToken={deleteToken} deletePost={deletePost} />
    </div>
}

export { Pages }