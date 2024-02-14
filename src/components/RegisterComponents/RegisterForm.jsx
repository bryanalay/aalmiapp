import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../hooks/useData";

function RegisterForm() {
  const { registerUser } =useData()
  const nav = useNavigate()
  const user = { username: "", password: "" };
  function handleChangeUsername(evt) {
    user.username = evt.target.value;
  }

  function handleChangePassword(evt) {
    user.password = evt.target.value;
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    registerUser(user)
    nav('/login')
  }

  return (
    <div
      className={`sm:rounded-xl bg-orange-300 flex flex-col justify-center items-center p-8 sm:w-96 gap-4 h-80`}
    >
      <h1 className="text-white font-bold text-[35px]">Create Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={`rounded-none w-52 h-9 px-4 border-black border-2`}
          onChange={handleChangeUsername}
          placeholder="User"
          required
          minLength={5}
          name="ipt"
        ></input>
        <input
          className={`m-3 rounded-none w-52 h-9 px-4 border-black border-2`}
          onChange={handleChangePassword}
          placeholder="Password"
          required
          minLength={8}
          name="oipt"
        ></input>
        <button
          type="submit"
          className={`mb-2 inline-block text-center h-10 px-4 py-2 font-semibold rounded-md w-52 bg-black text-white hover:bg-slate-800`}
        >
          Create
        </button>
      </form>
        <button
          className="font-semibold hover:text-gray-600"
        >
          <Link to='/login'>Ya tengo cuenta</Link>
        </button>
    </div>
  );
}

export { RegisterForm };
