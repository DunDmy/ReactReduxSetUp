/*
* Title: master_Reducer
* Desc: This reducer is used to combine all reducers into one object that will be passed to store inside index.js
*/
import {searchURL} from './searchbar_Reducer.js'

//Redux lib
import {combineReducers} from 'redux';

export const master_Reducer = combineReducers({searchURL});