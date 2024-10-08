import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { getLocalstorage } from "../../data/localStorage";

const LeftSlideContent = ({setOpen}) => {
  const { deleteUser, setIsOpen } = useContext(UserContext)
  const { user } = getLocalstorage()
  return (
    <div className='grid bg-orange-200 h-full w-full'>
        <div className='grid place-items-center'>
          <Link to='./' onClick={()=>setOpen(false)}>Home</Link>
          <Link to={`./profile/${user}`} onClick={()=>setOpen(false)}>Profile</Link>
          {/* <Link to='./post' onClick={()=>setOpen(false)}>Post</Link> */}
          <button onClick={()=>{setIsOpen(true)}}>Open Modal</button>
          <button
            className={`inline-block text-center h-10 px-4 py-2 m-3 font-semibold rounded-md bg-black text-white hover:bg-red-700 hover:text-black`}
            onClick={() => {
              deleteUser();
            }}
          >
            Cerrar Sesion
          </button>
        </div>
      </div>
  )
}

export default LeftSlideContent