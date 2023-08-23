import { Post } from "./Post";
import { NewPostForm } from "./NewPostForm";

function Posts({data,setData,deletePost}) {
  return (
    <div className={`h-max w-full`}>
        <h1 className="pt-6 font-bold text-2xl">Post Something!!:D</h1>
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
