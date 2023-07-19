import { Post } from "./Post";
import { NewPostForm } from "./NewPostForm";

function Posts({data,setData,deletePost}) {
  return (
    <div className={` sm:border-l-2 border-l-0 sm:border-r-2 border-r-0 border-gray-300 h-max w-full`}>
        <NewPostForm data={data} setData={setData} />
      {data?.map((po) => (
        <Post
          key={po.id}
          id={po.id}
          username={po.username}
          cuerpo={po.body}
          fecha={po.fecha}
          user_id={po.user_id}
          deletePost={deletePost}
          data={data} setData={setData}
          likes={po.likes}
        />
      ))}
    </div>
  );
}

export { Posts };
