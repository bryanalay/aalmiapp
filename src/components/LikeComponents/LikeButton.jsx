function LikeButton({ handleLike, liked }) {
  return (
    <button
      onClick={handleLike}
      className={`
                ${liked ? "bg-cyan-500" : "bg-white"}
            rounded border-cyan-500 border-[1px] w-14 h-6 text-center hover:bg-gray-200 hover:border-black hover:text-cyan-600`}
    >
      Like
    </button>
  );
}

export { LikeButton };
