import { PostsPage } from "./PostsPage";
import { LeftSlide } from "../components/HomeComponents/LeftSlide";
import { RightSlide } from "../components/HomeComponents/RightSlide";

function Home({ deleteToken,deletePost }) {
  return (
    <div className={`h-max grid grid-cols-12 `}>
      <LeftSlide deleteToken={deleteToken} />      
      <PostsPage deleteToken={deleteToken} deletePost={deletePost}/>
      <RightSlide />
    </div>
  );  
}

export { Home };