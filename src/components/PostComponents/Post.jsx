import { getLocalstorage } from "../../data/localStorage";
import { LikeButton } from "../LikeComponents/LikeButton";
import { useEffect, useState } from "react";
import likesFetch from "../../utils/likesFetch.js";

function Post({
  id,
  username,
  cuerpo,
  fecha,
  user_id,
  deletePost,
  data,
  setData,
  likes,
}) {
  const lost = getLocalstorage();
  const tk = lost.token;
  const [liked, setLiked] = useState(false);
  const { addLike,dropLike } = likesFetch

  function deleteEx() {
    const newArr = data.filter((obj) => obj.id !== id);
    setData(newArr);
    deletePost(tk, id);
  }

  function handleLike(){
    liked?Likear():deleteLike()    
  }

  function Likear(){
    dropLike(tk,id)
    setLiked(false)
  }

  function deleteLike(){
    addLike(tk,id)
    setLiked(true)
  }

  useEffect(() => {
    if (likes != null) {
      likes.includes(lost.username) && setLiked(true)
    }
  }, []);

  return (
    <div className={`bg-violet-100 rounded-md py-2 my-4 mx-2 text-left`} key={id}>
      <h1 className="pl-4 text-xl">{username}</h1>
      <p className="pl-4">{cuerpo}</p>
      <div className="pl-4 flex gap-3">
      <LikeButton handleLike={handleLike} liked={liked} />
      {user_id == lost.user ? (
        <button
          className={`inline-block text-center h-6 px-2 font-semibold rounded-md bg-slate-400 text-white hover:bg-red-600`}
          onClick={() => deleteEx()}
        >
          Delete
        </button>
      ) : (
        ""
      )}
      </div>
    </div>
  );
}

export { Post };
