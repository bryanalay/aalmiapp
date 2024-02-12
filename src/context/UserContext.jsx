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

  async function login(user) {    
    await postLogin(user);
    hayToken()
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
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJ2Zlp2IiwidXNlcm5hbWUiOiJwYXBheWEiLCJwYXNzd29yZCI6IiQyYiQwNSRIdmc5Z0ZPV2JHempXMmJkWDVEcVp1U1pScXZBcGUvNzh3ZVYxRzRmZmRJR2k2Yi9EcFBzaSIsImlhdCI6MTcwNDU5NzY0Nn0.9FheSVJ9kYkNn0dk_9fyabmqzbWHT3M5cX74UeBS0nE',
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
        loged,
        coso,
        userInfo,
        registered,
        tokenExist
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export {UserContext,UserProvider}