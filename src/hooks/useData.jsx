import { useState } from "react";
import { getLocalstorage, deleteLocalstorage } from "../data/localStorage";
import { postLogin } from "../utils/login";
import { postRegister } from "../utils/register";
import { elimPost } from "../utils/posts";

function useData() {
  const [getPage, setPage] = useState();
  const [token, setToken] = useState(false);
  const [register, setRegister] = useState(true);
  //loginData tiene el objeto con token y el id del usuario
  async function login(user) {    
    await postLogin(user);
    hayToken()
  }

  async function deletePost(tk,body){
    await elimPost(tk,body)
  }

  async function registerUser(user){
    await postRegister(user)
    setRegister(true)
  }

  function traerToken() {
    return getLocalstorage().token;
  }

  function deleteToken() {
    setToken(false);
    deleteLocalstorage();
  }

  function showRegisterForm() {
    switch (register) {
      case true:
        setRegister(false);
        break;
      case false:
        setRegister(true);
        break;
      default:
        break;
    }
  }

  function hayToken() {
    const tk = traerToken();
    if (tk) {
      return setToken(true);
    } else {
      return setToken(false);
    }
  }

  return {
    login,
    deleteToken,
    getPage,
    setPage,
    hayToken,
    token,
    register,
    showRegisterForm,
    registerUser,
    setRegister,
    deletePost
  };
}

export { useData };
