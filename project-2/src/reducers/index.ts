import { IState } from '../interfaces';
import { combineReducers } from 'redux';
import { userReducer } from './userReducer'

//the combination of all reducers in one spot
export const state = combineReducers<IState> ({
    UserState: userReducer,
})
