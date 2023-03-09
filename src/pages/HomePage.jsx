import { PostsPage } from "./PostsPage";

function Home({ deleteToken,deletePost }) {
  return (
    <>
      <button
        onClick={() => {
          deleteToken();
        }}
      >
        Cerrar Sesion
      </button>
      <PostsPage deletePost={deletePost}/>
    </>
  );
}

export { Home };
