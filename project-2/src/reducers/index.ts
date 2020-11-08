import { IState } from '../interfaces';
import { combineReducers } from 'redux';
import { userReducer } from './userReducer'
import 'bootstrap/dist/css/bootstrap.min.css'
import postReducer from '../components/postsSlice'


//the combination of all reducers in one spot
export const state = combineReducers<IState> ({
    UserState: userReducer,
    PostState: postReducer
})
