
function LoadingGlobal({loading}) {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
      <h2 className="text-center text-white text-xl font-semibold absolute mt-40">Loading...</h2>
    </div>
  );
}

export default LoadingGlobal;