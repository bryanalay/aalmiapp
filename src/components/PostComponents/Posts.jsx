import { Post } from "./Post";
import { NewPostForm } from "./NewPostForm";
import { useData } from "../../hooks/useData";

function Posts({data,setData,showNewpost}) {

  const {deletePost} = useData()

  return (
    <div className={`${showNewpost ? 'min-h-screen':'h-full'} w-full`}>
        { showNewpost && <div>
          <h1 className="pt-6 font-bold text-2xl">Post Something</h1>
          <NewPostForm data={data} setData={setData} />
        </div>}
      {data?.map((po) => (
        <Post
          key={po.id}
          id={po.id}
          username={po.username}
          cuerpo={po.body}
          fecha={po.fecha}
          user_id={po.user_id}
          data={data} setData={setData}
          likes={po.likes}
        />
      ))}
    </div>
  );
}

export { Posts };
