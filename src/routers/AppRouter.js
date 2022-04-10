import React from 'react'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import {
    Route,
    Routes,
    BrowserRouter,
  } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
            <Routes>
 
                <Route path="/" element={ < JournalScreen />} />
                            
                <Route path="/*" element={ <AuthRouter />} /> 
 
            </Routes>
        </BrowserRouter>  
  )
}

