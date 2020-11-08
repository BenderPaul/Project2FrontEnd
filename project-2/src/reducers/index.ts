import { IState } from '../interfaces';
import { combineReducers } from 'redux';
import { userReducer } from './userReducer'
import 'bootstrap/dist/css/bootstrap.min.css'
<<<<<<< HEAD
import { postReducer } from './postReducer';
import { commentReducer } from './commentReducer';
=======
import { postReducer } from '../reducers/postReducer'
>>>>>>> 664636b... changes


//the combination of all reducers in one spot
export const state = combineReducers<IState> ({
    UserState: userReducer,
    PostState: postReducer,
    CommentState: commentReducer
})
