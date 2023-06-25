function LoginForm({ login, showRegisterForm }) {
  const user = { username: "", password: "" };
  function handleChangeUsername(evt) {
    user.username = evt.target.value;
    console.log(user);
  }

  function handleChangePassword(evt) {
    user.password = evt.target.value;
    console.log(user);
  }

  function handleSubmit(event){
    event.preventDefault()
    login(user)
  }

  return (
    <div
      className={`rounded-xl bg-orange-300 flex flex-col justify-center items-center p-8 w-96 gap-4`}
    >
      <h1 className="text-white font-bold text-[35px]">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={`rounded-none w-52 h-9 px-4 border-black border-2`}
          onChange={handleChangeUsername}
          placeholder="User"
        ></input>
        <input
          type={`password`}
          className={`m-3 rounded-none w-52 h-9 px-4 border-black border-2`}
          onChange={handleChangePassword}
          placeholder="Password"
        ></input>
        <button
          type="submit"
          className={`mb-3 inline-block text-center h-10 px-4 py-2 font-semibold w-52 rounded-md bg-black text-white hover:bg-slate-800`}
        >
          Entrar
        </button>
        <button
          type="button"
          className={`inline-block text-center h-10 px-4 py-2 w-36 font-semibold rounded-md bg-black text-white hover:bg-gray-800`}
          onClick={() => showRegisterForm()}
        >
          Crear Cuenta
        </button>
      </form>
    </div>
  );
}

export { LoginForm };
