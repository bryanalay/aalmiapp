import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";


function LeftSlide() {

  const { deleteUser } = useContext(UserContext)

  return (
    <div className="sticky h-screen hidden sm:inline sm:col-span-3">
      <div className='grid bg-orange-200 h-full w-full'>
        <div className='grid place-items-center'>
          <Link to='./'>Home</Link>
          <Link to='./profile'>Profile</Link>
          <Link to='./post'>Post</Link>
          <p>Opciones</p>
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
    </div>
  );
}

export { LeftSlide };
