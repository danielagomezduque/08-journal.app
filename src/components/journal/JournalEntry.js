import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div 
            className='journal__entry-picture'
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://fondosmil.com/fondo/35285.jpg)'
            }}    
        ></div>
        <div className='journal__entry-body'>
            <p className='journal__entry-title'> 
                Un nuevo día
            </p>
            <p className='journal__entry-content'> 
                Vamos a aprender para encontrar un empleo acorde a mis necesidades de estar en casa siempre
            </p>
        </div>
        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>28</h4>
        </div>
    </div>
  )
}
