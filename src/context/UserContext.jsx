import { createContext, useState } from "react";
import { getLocalstorage, deleteLocalstorage } from "../data/localStorage";

const UserContext = createContext()

const UserProvider = ({children}) =>{
  const [loged,setLoged] = useState(false)
  const [user,setUser] = useState(null)
  const coso = 'coso'

  //trae el localstorage
  function getUser (){
    const user = getLocalstorage()
    setUser(user)
  }

  //elimina el estado de usuario
  function deleteUser(){
    setUser(null)
    deleteLocalstorage()
    setLoged(false)
  }

  return (
    <UserContext.Provider 
      value={{
        loged,
        setLoged,
        getUser,
        deleteUser,
        coso,
        user
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export {UserContext,UserProvider}