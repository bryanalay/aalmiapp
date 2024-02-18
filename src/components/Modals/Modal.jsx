
function Modal({ setIsOpen ,action, children }) {
  const handleModalClick = (e) => {
    // Si el clic proviene del contenedor del modal y no de sus hijos, lo cerramos
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50`} onClick={handleModalClick}>
      <div className="absolute w-1/2 h-1/2 rounded-xl bg-violet-400" name='content'>
        <div className="h-full w-full grid container mx-auto">
          <section className="h-[256px] rounded-t-xl p-5">
            {children}
          </section>
          <div className="h-14 flex bg-white w-full rounded-b-xl">
            <button className="m-2 p-2 bg-black text-white" onClick={()=>{
              setIsOpen(false)
            }}>
              Cerrar
            </button>
            <button className="m-2 p-2 bg-slate-300 border border-black text-white"
            onClick={()=>{
              action()
            }}>Accion</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
