import { useContext } from "react";
import Loading from "../components/LoadingComponents/Loading";
import { Posts } from "../components/PostComponents/Posts";
import { useFetch } from "../hooks/useFetch";
import { UserContext } from "../context/UserContext";

function PostsPage() {
  const { deleteUser } = useContext(UserContext)
  const { data, setData, loading } = useFetch(
    "https://almiapitest.herokuapp.com/api/v1/posts"
  );

  return (
    <div className={`col-span-12 sm:col-span-6 sm:border-x-[1px] border-black`}>
      <div className="w-full  sm:hidden bg-green-400">
        <button
          onClick={() => {
            deleteUser();
          }}
          className="float-left bg-red-500 rounded-sm p-2 m-2"
        >
          Salir
        </button>
      </div>
      {loading ? (
        <Loading/>
      ) : (
        <Posts data={data} setData={setData}/>
      )}
    </div>
  );
}

export { PostsPage };
