import './App.css'
import { LoginPage } from './pages/LoginPage'
import { useContext, useEffect } from 'react'
import { useData } from './hooks/useData'
import { Pages } from './pages/Pages'
import { Register } from './pages/RegisterPage'
import { UserContext } from './context/UserContext'

function App() {

  const {coso,user}=useContext(UserContext)

  const {
    login,
    deleteToken,
    hayToken,
    token,
    registered,
    setRegistered,
    showRegisterForm,
    registerUser,
    deletePost
  } = useData()
  useEffect(() => {
    hayToken()
    if (token == true) {
      setRegistered(true)
    }
  }, [login])

  return (
    <div className="min-h-screen sm:bg-amber-400 bg-blue-300">
      {registered ? (
        token ? (
          <Pages deleteToken={deleteToken} deletePost={deletePost} />
        ) : (
          <LoginPage login={login} showRegisterForm={showRegisterForm} />
        )
      ) : (
        <Register
          registerUser={registerUser}
          showRegisterForm={showRegisterForm}
        />
      )}
      {console.log(user)}
    </div>
  )
}

export default App
