import { createSlice } from '@reduxjs/toolkit'
  
 const INITIAL_STATE= {
    currentUser: null 
  }

  //Define the reducer and actions via createSlice
  export const userSlice= createSlice({
    name: 'users',
    initialState: INITIAL_STATE,
    reducers: {
      setCurrentUser(state, action) {
        state.currentUser = action.payload
      }
    }
  })
//Destructure and export the plain action creators
  export const {setCurrentUser}= userSlice.actions 
  export const userReducer= userSlice.reducer

  // export const userReducer = (state= USER_INITIAL_STATE, action)=> {
  //   const {type, payload}= action

  //   switch (type) {
  //     case USER_ACTION_TYPES.SET_CURRENT_USER:
  //       return {
  //         ...state, /*return all previous state values but update only relevant ones*/
  //         currentUser: payload
  //       }
  //     default:
  //       return state;
  //   }
  // }
