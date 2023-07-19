function LikeButton({ handleLike, liked }) {
  return (
    <button
      onClick={handleLike}
      className={`
                ${liked ? "bg-cyan-500" : "bg-white"}
            rounded border-cyan-500 border-[1px] w-14 h-6 text-center hover:bg-gray-200`}
    >
      Like
    </button>
  );
}

export { LikeButton };
