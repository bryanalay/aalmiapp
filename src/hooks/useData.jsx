import { useState } from "react";
import { getLocalstorage, deleteLocalstorage } from "../data/localStorage";
import { postLogin } from "../utils/login";
import { postRegister } from "../utils/user";
import { elimPost } from "../utils/posts";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


function useData() {
  const [token, setToken] = useState(false);
  const [registered, setRegistered] = useState(true);
  const { hayToken, userInfo } = useContext(UserContext)
  //loginData tiene el objeto con token y el id del usuario
  async function login(user,) {    
    await postLogin(user);
  }

  //data post
  async function deletePost(tk,body){
    await elimPost(tk,body)
  }

  //data register postnewuser
  async function registerUser(user){
    await postRegister(user)
    setRegistered(true)
  }

  function traerToken() {
    return userInfo.token;
  }

  function deleteToken() {
    setToken(false);
    deleteLocalstorage();
  }

  function showRegisterForm() {
    registered? setRegistered(false):setRegistered(true)
  }

  // function hayToken() {
  //   const tk = traerToken();

  //   if (tk) {
  //     return setToken(true);
  //   } else {
  //     return setToken(false);
  //   }
  // }

  return {
    login,
    deleteToken,
    token,
    registered,
    showRegisterForm,
    registerUser,
    setRegistered,
    deletePost
  };
}

export { useData };
