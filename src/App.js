import React, {useState} from 'react'
import Auth from './components/Auth'
import Cookies from 'universal-cookie'
import Chat from './components/Chat'
import Room from './components/Room'
import Header from './components/Header'

const App = () => {
    const cookies = new Cookies()
    const [loggedIn, setLoggedIn] = useState(cookies.get('auth-token'));
    const [room, setRoom ] = useState(null)

    if(loggedIn){
  return (
    <div>
        <Header checkLogin={setLoggedIn}/>
    {room ? <Chat room={room}/> : <Room room={room} setFunRoom={setRoom}/> }
    </div>
  )}

  return (
    <div><Header/><Auth setIsAuth={setLoggedIn}/> </div>
  )
}

export default App