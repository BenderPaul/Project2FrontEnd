import * as React from 'react';
import { useSelector, Provider } from 'react-redux'
import { IUser, IUserState } from './interfaces'
import { store } from './Store';
import './App.scss'
import { AddUser } from './components/AddUser'
import { Header } from './components/Header';


//Wraps app in a provider tag so that it can use the store
export const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
}

//Main component to be rendered, will be able to pull from the store, router will go here as well
export const App = () => {
  
  //gets the user from the store
  const user: IUser = useSelector( //Allows us to extract data from the store using a selector function. 
    (state: IUserState) => state.UserState
  );


  return(
    <div>
      <div>
        <Header />
      </div>
        <h1> Register New User </h1>
        <AddUser />
        <p>show me the money: {user.firstName}</p>
    </div>

  )
}

export default App;
