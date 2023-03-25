import { PostsPage } from "./PostsPage";

function Home({ deleteToken,deletePost }) {
  return (
    <div className={`bg-yellow-200 py-4 px-4`}>
      <button className={`class="h-10 px-6 py-3 m-3 font-semibold rounded-md bg-black text-white type="submit"`}
        onClick={() => {
          deleteToken();
        }}
      >
        Cerrar Sesion
      </button>
      <PostsPage deletePost={deletePost}/>
    </div>
  );
}

export { Home };
