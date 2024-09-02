import { useState, useContext } from 'react';
import DeleteUserModal from '../Modals/DeleteUserModal';

function ProfileDropdown() {
  const [dropIsOpen, setDropIsOpen] = useState(false);
  const [modalIsOpen,setModalIsOpen] = useState(false)

  const toggleDropdown = () => {
    setDropIsOpen(!dropIsOpen);
  };

  const handleDeleteAccount = () =>{
    setModalIsOpen(true)
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Opciones
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.707.293l6 6a1 1 0 01-1.414 1.414L10 5.414 4.707 10.707a1 1 0 11-1.414-1.414l6-6A1 1 0 0110 3z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      { modalIsOpen && <DeleteUserModal setModalIsOpen={setModalIsOpen}/>}
      {dropIsOpen && (
        <></>
        // <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        //   <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        //     <a
        //       href="#"
        //       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        //       role="menuitem"
        //     >
        //       Opcion 1
        //     </a>
        //     <a
        //       href="#"
        //       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        //       role="menuitem"
        //     >
        //       Opción 2
        //     </a>
        //     <button          
        //       className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        //       role="menuitem"
        //       onClick={handleDeleteAccount}
        //     >
        //       Eliminar
        //     </button>
        //   </div>
        // </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
