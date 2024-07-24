import RightSlideContent from "./RightSlideContent";

function RightSlide() {
  return (
    <div className="sm:col-span-3 hidden sm:inline h-screen sm:place-items-center px-6 ">
      <RightSlideContent/>
    </div>
  );
}

export { RightSlide };
