import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes'

export const NotesAppBar = () => {

    const dispatch = useDispatch()
    const {active} = useSelector(state=>state.notes)
    // console.log(active)

    const handleSaveNote = ()=>{
        dispatch(startSaveNote(active))
    }
    const handlePictureClic = ()=>{
        document.querySelector('#fileSelector').click()
    }
    const handleFileChange = (e)=>{
        const file = e.target.files[0]
        if (file){
            dispatch(startUploading(file))
        }
    }
  return (
    <div className='notes__appbar'>
        <span>
            28 Ago 2020
        </span>
        <input
            id='fileSelector'
            name='file'
            type="file"
            style={{display: 'none'}}
            onChange={handleFileChange}
        />
        <div>
            <button 
            className='btn'
            onClick={handlePictureClic}
            >
                Picture
            </button>
            <button 
            className='btn'
            onClick={handleSaveNote}
            >
                Save
            </button>
        </div>
    </div>
  )
}
