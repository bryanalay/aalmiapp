import { useContext } from "react";
import Loading from "../components/LoadingComponents/Loading";
import { Posts } from "../components/PostComponents/Posts";
import { useFetch } from "../hooks/useFetch";
import { UserContext } from "../context/UserContext";
import { API_BASE_URL } from "../../api/config";

function PostsPage() {
  const { deleteUser } = useContext(UserContext)
  const { data, setData, loading } = useFetch(
    API_BASE_URL+"posts"
  );

  return (
    <div className={`col-span-full sm:col-span-6 sm:border-x-[1px] border-black`}>
      {loading ? (
        <Loading/>
      ) : (
        <Posts data={data} setData={setData} showNewpost={true}/>
      )}
    </div>
  );
}

export { PostsPage };
