import RightSlideContent from "./RightSlideContent";

function RightSlide() {
  return (
    <div className="h-screen hidden sm:grid sm:col-span-3 sm:place-items-center px-6">
      <RightSlideContent/>
    </div>
  );
}

export { RightSlide };
