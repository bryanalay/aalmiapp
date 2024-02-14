import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

function LoginForm() {

  const { login, showRegisterForm } = useContext(UserContext)

  const user = { username: "", password: "" };
  function handleChangeUsername(evt) {
    user.username = evt.target.value;
  }

  function handleChangePassword(evt) {
    user.password = evt.target.value;
  }

  function handleSubmit(event){
    event.preventDefault()
    login(user)
  }

  return (
    <div
      className={`sm:rounded-xl bg-orange-300 flex flex-col justify-center items-center p-8 sm:w-96 gap-4 h-80`}
    >
      <h1 className="text-white font-bold text-[35px]">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={`rounded-none w-52 h-9 px-4 border-black border-2`}
          onChange={handleChangeUsername}
          placeholder="User"
          required
          name="ipt"
        ></input>
        <input
          type={`password`}
          className={`m-3 rounded-none w-52 h-9 px-4 border-black border-2`}
          onChange={handleChangePassword}
          placeholder="Password"
          required
          name="oipt"
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
        >
          <Link to='/signup'>Crear cuenta</Link>
        </button>
      </form>
    </div>
  );
}

export { LoginForm };
