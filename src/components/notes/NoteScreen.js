import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppBar/>
      <div className='notes__content'>
        <input
          type="text"
          placeholder='Some awesome title'
          className='notes__title-input'
        />
        <textarea
          className='notes__textarea'
          placeholder="What happened today?"
        >
        </textarea>
        <div className='notes__image'>
          <img
            src='https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2021/06/28/60d9851884f0c.jpeg'
            alt='imagen'
          />
        </div>
      </div>
    </div>
  )
}
