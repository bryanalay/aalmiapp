import { PostsPage } from "./PostsPage";
import { RightSlide } from "../components/HomeComponents/RightSlide";
import Modal from "../components/Modals/Modal";
import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "./ProfilePage";
import { PostPage } from "./PostPage";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function HomePage() {
  const { isOpen,setIsOpen } = useContext(UserContext)

  return (
    <main className={`col-span-full sm:col-span-9 sm:col-start-4 overflow-auto`}>
      <div className="grid grid-cols-9 h-max">
        <div className="col-span-full sm:col-span-6">
          <Routes>
            <Route path="/" element={<PostsPage/>}/>
            <Route path="/profile/:id" element={<ProfilePage/>}/>
            <Route path="/post/:id" element={<PostPage/>}/>
          </Routes>
        </div>
        <RightSlide />
      </div>
    </main>
  );  
}

export { HomePage };