import { types } from "../types/types"
import {firebase, googleAuthProvider} from '../firebase/firebase-config'
import { finishLoading, startLoading } from "./uis"
import Swal from 'sweetalert2'
import { noteLogout } from "./notes"


export const startLoginEmailPassword =  (email, password)=>{
    return(dispatch)=>{
        dispatch(startLoading());
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(({user}) =>{
            dispatch(
                Login(user.uid, user.displayName))
            dispatch(finishLoading())
        })
        .catch(e=>{
            console.log(e);
            dispatch(
                finishLoading()
            )
            Swal.fire('Error',e.message,'error')
        })
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name)=>{
    return (dispatch)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async({user}) =>{
            await user.updateProfile({displayName: name})
            console.log(user)
            dispatch(
                Login(user.uid, user.displayName))
        })
        .catch(e=>{
            console.log(e)
            Swal.fire('Error',e.message,'error')
        })
    }
}

export const startGoogleLogin = () =>{
    return(dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) =>{
            dispatch(
                Login(user.uid, user.displayName))
        })
    }
}

export const Login = (uid, displayName)=>{
    return{
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const Logout = ()=>{
    return{
        type: types.logout
    }
}

export const startLogout = ()=>{
    return async(dispatch)=>{
        await firebase.auth().signOut()
        dispatch(Logout());
        dispatch(noteLogout())
    }
}
