import React, { useEffect, useState } from 'react'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import {
    Route,
    Routes,
    BrowserRouter,
  } from "react-router-dom";
import {firebase} from '../firebase/firebase-config'
import { useDispatch } from 'react-redux'
import { Login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { loadNotes } from '../helpers/loadNotes';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user)=>{

      if (user?.uid){
        dispatch(Login(user.uid, user.displayName));
        setIsLoggedIn(true);

        dispatch(startLoadingNotes(user.uid))

      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);

    })
  }, [dispatch, setChecking]);
  
  if(checking){
    return(
      <h1>Espere...</h1>
    )
  }

  return (
    <BrowserRouter>
            <Routes>
 
                <Route path="/" element={ 
                <PrivateRoute isAuth={isLoggedIn}>
                  < JournalScreen />
                </PrivateRoute>
                  } />
                            
                <Route path="/*" element={ 
                <PublicRoute isAuth={isLoggedIn}>
                  <AuthRouter />
                </PublicRoute>
                } /> 
 
            </Routes>
        </BrowserRouter>  
  )
}

