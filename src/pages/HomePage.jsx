import { PostsPage } from "./PostsPage";
import { LeftSlide } from "../components/HomeComponents/LeftSlide";
import { RightSlide } from "../components/HomeComponents/RightSlide";
import Modal from "../components/Modals/Modal";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import { PostPage } from "./PostPage";
import { useState } from "react";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`h-max grid grid-cols-12 `}>
      {isOpen && <Modal setIsOpen={setIsOpen}>
          <div>titulo</div>
          <p>cosas que pasan</p>
          <p>cosas que pasan</p>
          <p>cosas que pasan</p>
        </Modal>}
      <LeftSlide setIsOpen={setIsOpen}/>      
      {/* <PostsPage/> */}
      <Routes>
        <Route path="/" element={<PostsPage/>}/>
        <Route path="/profile/:id" element={<ProfilePage/>}/>
        <Route path="/post" element={<PostPage/>}/>
      </Routes>
      <RightSlide />
    </div>
  );  
}

export { HomePage };