import { combineReducers } from "redux";
import { createStore } from "@reduxjs/toolkit";

const initialState = {};

// Add firebase to reducers
const rootReducer = combineReducers({});

export const store = createStore(rootReducer, initialState);
