import State from 'react-redux';
import { IState } from '../type.d';
import { combineReducers } from 'redux';
import { reducer } from './UserRegister/reducer'

export const state = combineReducers<IState> ({
    UserState: reducer,
})
