import { useContext } from "react";
import { UserContext } from "../../context/UserContext";


function LeftSlide() {

  const { deleteUser } = useContext(UserContext)

  return (
    <div className=" h-max hidden sm:inline sm:col-span-3">
      <button
        className={`inline-block text-center h-10 px-4 py-2 m-3 font-semibold rounded-md bg-black text-white hover:bg-red-700 hover:text-black`}
        onClick={() => {
          deleteUser();
        }}
      >
        Cerrar Sesion
      </button>
    </div>
  );
}

export { LeftSlide };
