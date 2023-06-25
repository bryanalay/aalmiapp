import { Posts } from "../components/PostComponents/Posts"
import { useFetch } from "../hooks/useFetch";

function PostsPage({deletePost,deleteToken}){
    const { data, setData, loading } = useFetch("https://almiapitest.herokuapp.com/api/v1/posts");

   return(<div className={`col-span-12 sm:col-span-6`}>
        <div className="w-full inline-block sm:hidden bg-blue-400">
            <button onClick={() => {
          deleteToken();
        }} className="float-left bg-red-500 rounded-sm p-2 m-2">asdasd</button>
        </div>
        {loading ? <h1>Loading...</h1> :<Posts data={data} setData={setData} deletePost={deletePost}/>}
    </div>)
}

export { PostsPage }