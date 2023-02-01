import { auth, provider } from './../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import Cookies from 'universal-cookie';
import classes from './auth.module.css'

const cookies = new Cookies()
const Auth = (props) => {

    const handleClick = async()=>{
        try{
       const res= await signInWithPopup(auth,provider)
       cookies.set('auth-token', res.user.refreshToken)
       props.setIsAuth(true)
        }
        catch(err){
            console.error(err)
        }
    }
  return (
    <div className={classes.home}>
        <h2>Sign In with Google</h2>
        <button className={classes.button} onClick={handleClick}>Click Me!</button>
    </div>
  )
}

export default Auth
