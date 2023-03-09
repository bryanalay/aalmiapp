import { Posts } from "../components/PostComponents/Posts"
import { useFetch } from "../hooks/useFetch";

function PostsPage({deletePost}){
    const { data, setData, loading } = useFetch("https://almiapitest.herokuapp.com/api/v1/posts");

    return(<>
        <h1>Posts page</h1>
        {loading ? <h1>Loading...</h1> :<Posts data={data} setData={setData} deletePost={deletePost}/>}
    </>)
}

export { PostsPage }