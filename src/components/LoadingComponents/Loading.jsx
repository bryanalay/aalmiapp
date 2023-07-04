const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex">
        <div className="w-4 h-4 bg-gray-400 rounded-full animate-bounce mr-1"></div>
        <div className="w-4 h-4 bg-gray-400 rounded-full animate-bounce mr-1"></div>
        <div className="w-4 h-4 bg-gray-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loading;
