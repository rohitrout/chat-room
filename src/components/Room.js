import React from 'react'
import { useRef } from 'react'
import classes from './room.module.css'

const Room = (props) => {
    const roomInputRef = useRef()

  return (
    <div className={classes.room}>
        <label>Enter Room Name</label>
        <input className={classes.input} ref={roomInputRef} placeholder='Enter Room Name...' />
        <hr/>
        <button className={classes.button} onClick={()=>{props.setFunRoom(roomInputRef.current.value)}}>Enter Room</button>
    </div>
  )
}

export default Room