import React, { useEffect } from 'react'
import { useState } from 'react'
import {addDoc, collection, onSnapshot, query, where} from 'firebase/firestore'
import { db, auth } from './../firebase-config';
import classes from './chat.module.css'

const Chat = (props) => {
  const [message, setMessage] = useState('')
  const [fetchMsg, setFetchMsg] = useState([])

  const messageRef = collection(db,'messages')

  useEffect(()=>{
    const getMessages = query(messageRef, where('room','==', props.room))
    const unSub=onSnapshot(getMessages, (snapshot)=>{
      let fetchMsg=[]
      snapshot.forEach((doc)=>{
        fetchMsg.push({...doc.data(), id:doc.id })
      })
      setFetchMsg(()=>fetchMsg)
    })

    return ()=> unSub()
  },[])

  const handleSubmit=async(e)=>{
    e.preventDefault()
    
    if(message === '') return

    await addDoc(messageRef,{
      text: message,
      user: auth.currentUser.displayName,
      room: props.room
    })

    setMessage('')
  }
  return (
    <div className={classes.main}>
    <div className={classes.data}>{fetchMsg.map((msg)=><h2 key={msg.id}><span style={{color:'gray'}}>{msg.user}</span> * {msg.text}</h2>)}</div>
    <form onSubmit={handleSubmit} className={classes.form}>
      <input placeholder="Enter to send..."className={classes.input}onChange={(e)=>setMessage(e.target.value)} value={message}/>
      <button className={classes.button} type='submit'>Send</button>
    </form>
    </div>
  )
}

export default Chat