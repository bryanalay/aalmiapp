import './App.css'
import { LoginPage } from './pages/LoginPage'
import { useContext, useEffect } from 'react'
import { useData } from './hooks/useData'
import { Pages } from './pages/Pages'
import { RegisterPage } from './pages/RegisterPage'
import { UserContext } from './context/UserContext'

function App() {

  const {coso,user, hayToken, tokenExist, getUser, registered, setRegistered, showRegisterForm, login, setUserInfo }=useContext(UserContext)

  const {
    registerUser
  } = useData()

  useEffect(()=>{
    hayToken()
    if(tokenExist == true){
      
      setRegistered(true)
    }
  },[login])
  //setRegistered(true)
  // useEffect(() => {
  //   hayToken()
  //   if (tokenExist == true) {
  //     setRegistered(true)
  //   }
  // }, [login])

  return (
    <div className="w-screen h-screen sm:w-full sm:h-full sm:bg-amber-400 bg-blue-300">
      {registered ? (
        tokenExist ? (
          <Pages/>
        ) : (
          <LoginPage/>
        )
      ) : (
        <RegisterPage
          registerUser={registerUser}
        />
      )}
    </div>
  )
}

export default App
