import { useState } from "react";
import LeftSlideContent from "./LeftSlideContent";
import bgline from '../../assets/bgline.png'

function LeftSlide({setIsOpen}) {

  const [open,setOpen] = useState(false)
  function handleClick(e){
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  }
  return (
    <>
    {open && 
    <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex z-50`} 
      onClick={handleClick}
    >
      <div name='slide' className="w-2/3">
        <LeftSlideContent/>
      </div>
    </div>}
      <button className="float-left rounded-sm p-2 m-2 h-10 w-10 sm:hidden inline"
       style={{ backgroundImage: `url(${bgline})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
      onClick={()=>{setOpen(!open)}}></button>
    <div className="sticky h-screen hidden sm:inline sm:col-span-3">
      <LeftSlideContent setIsOpen={setIsOpen} />
    </div>
    </>
  );
}

export { LeftSlide };
