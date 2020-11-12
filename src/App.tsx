import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { loadState } from './Store';
import './App.scss';
import { RegisterUser } from './components/RegisterUser';
import { Header } from './components/Header';
import { Logout } from './components/Logout';
import { ErrorPage } from './components/ErrorPage';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Login } from './components/Login';
import { EditProfile } from './components/EditProfile';
import { ForgotPassword } from './components/ForgotPassword';

export const isFoo = (testString: string) => {
  if (testString === "foo") {
      return true
  }
  return false
}

//Main component to be rendered, will be able to pull from the store, router will go here as well
export const App = () => {

  //checks if the state is empty or not, returns the user if not
  const user = loadState() ? loadState() : "";

  return(

      <BrowserRouter basename="/">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' 
              render={() => user ? window.location.pathname = "/profile" : <Login/>}/>
            <Route exact path='/profile'
              render={() => user ? <Profile/> : window.location.pathname = "/"} />
            <Route path='/profile/edit' 
              render={() => user ? <EditProfile/> : window.location.pathname = "/"} />
            <Route path='/register' 
              render={() => user ? window.location.pathname = "/profile" : <RegisterUser {...user}/>} />
            <Route path='/logout' component={Logout} />
            <Route path='/forgot' component={ForgotPassword} />
            <Route component={ErrorPage} />
          </Switch>
          
      </BrowserRouter>


  )
}

export default App;
