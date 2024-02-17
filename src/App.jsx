import './App.css'
import { LoginPage } from './pages/LoginPage'
import { useContext, useEffect } from 'react'
import { useData } from './hooks/useData'
import { Pages } from './pages/Pages'
import { RegisterPage } from './pages/RegisterPage'
import { UserContext } from './context/UserContext'
import { BrowserRouter, Routes, Route, Navigate, createHashRouter, RouterProvider } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'

function App() {

  const {coso,user, hayToken, tokenExist, getUser, registered, setRegistered, showRegisterForm, login, setUserInfo }=useContext(UserContext)

  const router = createHashRouter([
    {
      path: '/',
      element: tokenExist?<Navigate to='/pages'/>:<Navigate to='/login'/>
    },
    {
      path: '/login',
      element: tokenExist?<Navigate to='/pages'/>:<LoginPage/>
    },
    {
      path: '/signup',
      element: tokenExist?<Navigate to='/pages'/>:<RegisterPage/>
    },
    {
      path: '/pages/*',
      element: tokenExist?<Pages/>:<Navigate to='/login'/>
    },
    {
      path: '/profile',
      element: <ProfilePage/>
    }
  ])

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
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={tokenExist?<Navigate to='/pages'/>:<LoginPage/>} />
    //     <Route path='/login' element={tokenExist?<Navigate to='/pages'/>:<LoginPage/>} />
    //     <Route path='/signup' element={tokenExist?<Navigate to='/pages'/>:<RegisterPage/>} />
    //     <Route path='/pages' element={tokenExist?<Pages/>:<Navigate to='/login'/>} />
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router}/>
  )
}

export default App
