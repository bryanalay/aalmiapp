import './App.css'
import { LoginPage } from './pages/LoginPage'
import { useContext, useEffect } from 'react'
import { useData } from './hooks/useData'
import { Pages } from './pages/Pages'
import { RegisterPage } from './pages/RegisterPage'
import { UserContext } from './context/UserContext'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {

  const {coso,user, hayToken, tokenExist, getUser, registered, setRegistered, showRegisterForm, login, setUserInfo }=useContext(UserContext)

  // const {
  //   registerUser
  // } = useData()

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

  //min-h-screen min-w-screen
  return (
    // <div className="min-h-screen sm:bg-amber-400 bg-blue-300">
    //   {registered ? (
    //     tokenExist ? (
    //       <Pages/>
    //     ) : (
    //       <LoginPage/>
    //     )
    //   ) : (
    //     <RegisterPage
    //       registerUser={registerUser}
    //     />
    //   )}
    // </div>
    <BrowserRouter>
      <Routes>
        <Route index element={tokenExist?<Navigate to='/pages'/>:<LoginPage/>} />
        <Route path='/login' element={tokenExist?<Navigate to='/pages'/>:<LoginPage/>} />
        <Route path='/signup' element={tokenExist?<Navigate to='/pages'/>:<RegisterPage/>} />
        <Route path='/pages' element={tokenExist?<Pages/>:<Navigate to='/login'/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
