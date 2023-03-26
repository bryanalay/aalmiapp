function LeftSlide({deleteToken}){
    return(<div className="bg-teal-600 h-full max-w-[350px]">
<button className={`inline-block text-center h-10 px-4 py-2 m-3 font-semibold rounded-md bg-black text-white hover:bg-red-700 hover:text-black `}
        onClick={() => {
          deleteToken();
        }}
      >
        Cerrar Sesion
      </button>
    </div>)
}

export { LeftSlide }