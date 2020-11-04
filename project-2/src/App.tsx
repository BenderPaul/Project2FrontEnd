import * as React from 'react';
import { useSelector, shallowEqual, useDispatch, Provider } from 'react-redux'
import { IUser, IUserState } from './type.d'
import { store } from './Store';
//import logo from './logo.svg';
import './App.css';

import { AddUser } from './components/AddUser'
import { addUser, removeUser } from './store/UserRegister/actionCreators'
import { Dispatch } from 'redux'

export const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

//This pulls the information from the store to be rendered (I think)
const App = () => {
  const user: IUser = useSelector(
    (state: IUserState) => state.UserState,
    shallowEqual
  )
  const dispatch: Dispatch<any> = useDispatch()

  const saveUser = (newUser:any) => {
    //supposedly this is where we pass our info to the servlet (But we're not using servlets)
    user.firstName = newUser.firstName
  };

  return(
    <div>
        <h1> Register New User </h1>
        <AddUser saveUser={saveUser} />
        <p>show me the money: {user.firstName}</p>
    </div>
  )
}

export default App;
