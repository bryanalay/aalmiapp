function CloseSessionBtn({deleteToken}){
    return(<>
    <button
        onClick={() => {
          deleteToken();
        }}
      >
        Cerrar Sesion
      </button></>)
}
export { CloseSessionBtn }