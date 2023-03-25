import { Post } from "./Post";
import { NewPostForm } from "./NewPostForm";

function Posts({data,setData,deletePost}) {
  return (
    <div className={`bg-sky-300 py-3`}>
      <div className={`px-4 my-3`}>
        <NewPostForm data={data} setData={setData} />
      </div>
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
        />
      ))}
    </div>
  );
}

export { Posts };
