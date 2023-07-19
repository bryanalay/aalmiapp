import { useState } from "react";
import { getLocalstorage, deleteLocalstorage } from "../data/localStorage";
import { postLogin } from "../utils/login";
import { postRegister } from "../utils/user";
import { elimPost } from "../utils/posts";

function useData() {
  const [getPage, setPage] = useState();
  const [token, setToken] = useState(false);
  const [registered, setRegistered] = useState(true);
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
    setRegistered(true)
  }

  function traerToken() {
    return getLocalstorage().token;
  }

  function deleteToken() {
    setToken(false);
    deleteLocalstorage();
  }

  function showRegisterForm() {
    registered? setRegistered(false):setRegistered(true)
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
    registered,
    showRegisterForm,
    registerUser,
    setRegistered,
    deletePost
  };
}

export { useData };
