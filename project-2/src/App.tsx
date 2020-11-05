import React from 'react';
import { useSelector, Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IState, IUser } from './interfaces';
import { loadState, store } from './Store';
import './App.scss';
import { AddUser } from './components/AddUser';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Logout } from './components/Logout';



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

  //Empty user, only used when a user is not logged in
  const emptyUser: IUser = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  }

  //checks if the state is empty or not, returns the user if not
  const user = loadState() ? loadState().UserState : emptyUser;

  //MAJORITY OF POST COMPONENTS ARE JUST PLACEHOLDERS
  return(
    <BrowserRouter basename="/">
        <Header />
        <Switch>
          <Route exact path='/' component={Post} />
          <Route path='/login' component={Post}/>
          <Route path='/profile'
            render={() => user.password ? <AddUser/> : <Post/>} />
          <Route path='/register' component={AddUser} />
          <Route path='/logout' component={Logout} />
        </Switch>
        
    </BrowserRouter>

  )
}

export default App;
