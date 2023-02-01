import React from 'react'
import classes from './header.module.css'
import  Cookies  from 'universal-cookie';
const cookies = new Cookies()

const Header = (props) => {
  return (
    <div className={classes.header}>
        <h1>chatRoom</h1>
        <button onClick={()=>props.checkLogin(cookies.remove('auth-token'))()} className={classes.button}>Logout</button>
    </div>
  )
}

export default Header