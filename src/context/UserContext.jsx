import { createContext, useState } from "react";
import { getLocalstorage, deleteLocalstorage, setLocalStorage } from "../data/localStorage";
import { postLogin } from "../utils/login";

const UserContext = createContext()

const UserProvider = ({children}) =>{
  const [loged,setLoged] = useState(false)
  const [tokenExist,setTokenExist] = useState(false)
  const [userInfo,setUserInfo] = useState(null)
  const [registered,setRegistered] = useState(true)
  const coso = 'coso'
  const [isOpen,setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  async function login(user) {
    setLoading(true) 
    await postLogin(user);
    hayToken()
    setLoading(false)
  }

  //trae el localstorage
  function getUser (){
    const user = getLocalstorage()
    setUserInfo(user)
  }

  //elimina el estado de usuario
  function deleteUser(){
    setUserInfo(null)
    deleteLocalstorage()
    setLoged(false)
    setTokenExist(false)
    setRegistered(true)
  }

  const userprueba = {
    token: 'TOKENHERE-XD',
    userid: 'vfZv',
    username: 'papaya'
  }

  /*
   * por reemplazar (no la usare, creo)
   */
  function deleteToken() {
    setTokenExist(false);
    deleteLocalstorage();
  }

  function showRegisterForm() {
    registered? setRegistered(false):setRegistered(true)
  }

  function getToken(){
    return getLocalstorage().token
  }

  function hayToken() {
    const tk = getToken()
    if (tk) {
      setTokenExist(true);
    } else {
      setTokenExist(false);
    }
    ()=>{
      tokenExist && setUserInfo(getLocalstorage())
    }
  }

  return (
    <UserContext.Provider 
      value={{
        setLoged,
        getUser,
        deleteUser,
        showRegisterForm,
        hayToken,
        setRegistered,
        login,
        setUserInfo,
        setIsOpen,
        setLoading,
        isOpen,
        loged,
        coso,
        userInfo,
        registered,
        tokenExist,
        loading
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export {UserContext,UserProvider}
