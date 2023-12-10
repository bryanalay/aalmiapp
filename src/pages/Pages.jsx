import { HomePage } from "./HomePage"

function Pages({deleteToken, deletePost}){
    return <div className={`h-max`}>
        <HomePage deleteToken={deleteToken} deletePost={deletePost} />
    </div>
}

export { Pages }