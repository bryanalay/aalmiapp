import { PostsPage } from "./PostsPage";
import { LeftSlide } from "../components/HomeComponents/LeftSlide";
import { RightSlide } from "../components/HomeComponents/RightSlide";
import Modal from "../components/Modals/Modal";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import { PostPage } from "./PostPage";

function HomePage() {
  return (
    <div className={`h-max grid grid-cols-12 `}>
      {/* <Modal/> */}
      <LeftSlide/>      
      {/* <PostsPage/> */}
      <Routes>
        <Route path="/" element={<PostsPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/post" element={<PostPage/>}/>
      </Routes>
      <RightSlide />
    </div>
  );  
}

export { HomePage };