import { PostsPage } from "./PostsPage";
import { LeftSlide } from "../components/HomeComponents/LeftSlide";
import { RightSlide } from "../components/HomeComponents/RightSlide";
import Modal from "../components/Modals/Modal";

function HomePage({ deleteToken,deletePost }) {
  return (
    <div className={`h-max grid grid-cols-12 `}>
      <Modal/>
      <LeftSlide deleteToken={deleteToken} />      
      <PostsPage deleteToken={deleteToken} deletePost={deletePost}/>
      <RightSlide />
    </div>
  );  
}

export { HomePage };