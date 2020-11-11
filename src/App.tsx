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


//Main component to be rendered, will be able to pull from the store, router will go here as well
export const App = () => {

  //Empty user, only used when a user is not logged in
  // const emptyUser: IUser = {
  //   id: 0,
  //   username: "",
  //   password: "",
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phoneNumber: "",
  //   occupation: "",
  //   bio: "",
  //   address: "",
  //   dob: ""
  // }

  //checks if the state is empty or not, returns the user if not
  const user = loadState() ? loadState() : "";


  //MAJORITY OF POST COMPONENTS ARE JUST PLACEHOLDERS
  return(

      <BrowserRouter basename="/">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login}/>
            <Route exact path='/profile'
              render={() => user ? <Profile/> : <Home/>} />
            <Route path='/profile/edit' component={EditProfile} />
            <Route path='/register' component={RegisterUser} />
            <Route path='/logout' component={Logout} />
            <Route component={ErrorPage} />
          </Switch>
          
      </BrowserRouter>


  )
}

export default App;
