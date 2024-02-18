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
      {loading ? (
        <Loading/>
      ) : (
        <Posts data={data} setData={setData} showNewpost={true}/>
      )}
    </div>
  );
}

export { PostsPage };
