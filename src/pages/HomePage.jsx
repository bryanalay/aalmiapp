import { PostsPage } from "./PostsPage";
import { LeftSlide } from "../components/HomeComponents/LeftSlide";
import { RightSlide } from "../components/HomeComponents/RightSlide";

function Home({ deleteToken,deletePost }) {
  return (
    <div className={`bg-yellow-200 h-screen grid grid-flow-col`}>
      <LeftSlide deleteToken={deleteToken} />      
      <PostsPage deletePost={deletePost}/>
      <RightSlide />
    </div>
  );  
}

export { Home };