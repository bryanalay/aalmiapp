import Loading from "../components/LoadingComponents/Loading";
import { Posts } from "../components/PostComponents/Posts";
import { useFetch } from "../hooks/useFetch";

function PostsPage({ deletePost, deleteToken }) {
  const { data, setData, loading } = useFetch(
    "https://almiapitest.herokuapp.com/api/v1/posts"
  );

  console.log(data);
  return (
    <div className={`col-span-12 sm:col-span-6 border-[1px] border-black`}>
      <div className="w-full  sm:hidden bg-green-400">
        <button
          onClick={() => {
            deleteToken();
          }}
          className="float-left bg-red-500 rounded-sm p-2 m-2"
        >
          Salir
        </button>
      </div>
      {loading ? (
        <Loading/>
      ) : (
        <Posts data={data} setData={setData} deletePost={deletePost} />
      )}
    </div>
  );
}

export { PostsPage };
