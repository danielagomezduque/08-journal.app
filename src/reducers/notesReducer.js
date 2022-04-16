import { types } from "../types/types";

/*
    {
        notes:[],
        active: null 
        o active: {
            id:'12123"
            title: '',
            body: '',
            imageUrl: '',
            date: 1234
        }
    }
*/
const initialState = {
    notes:[],
    active: null
}
export const notesReducer =(state=initialState, action)=>{
    switch (action.type) {
        case types.notesActive:
            
            return{
                ...state,
                active: {
                    ...action.payload
                }

            }
        case types.notesLoad:
            return{
                ...state,
                notes:[...action.payload]
            }

        default:
            return state;
    }
}