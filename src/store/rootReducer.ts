import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { createStore } from '@reduxjs/toolkit'


const initialState = {}

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer
})


export const store = createStore(rootReducer, initialState)