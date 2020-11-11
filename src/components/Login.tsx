import React, { useEffect, useReducer, useState, SyntheticEvent } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import {Form, Input} from "reactstrap";
import { reducer, initialState, } from "../reducers/loginReducer";
import { store } from '../Store';
import { loadState } from '../Store';
import { IUser } from '../interfaces';

import axios from "axios";

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

import { User } from '../models/user';



//Robert's implementation:
interface ILoginProps{
    authUser: User;
    errorMessage: string;
    loginAction: (username: string, password: string) => void;
}

//Styling from @material-ui/core
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
     marginTop: theme.spacing(2),
      flexGrow: 1
    },
    header: {
      textAlign: 'center',
      background: '#212121',
      color: '#fff'
    },
    card: {
     marginTop: theme.spacing(10)
    }
  })
);

// function LoginComponent(props: ILoginProps) {

// }

export const Login: React.FC = () => {
    const classes = useStyles();
    const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
     dispatch({
       type: 'setIsButtonDisabled',
       payload: false
     });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password]);

  // Robert's example:
//   const handleSubmit = (eve: SyntheticEvent<HTMLFormElement>) => {
//       localStorage.setItem("username", eve.currentTarget["username"].value);
//       eve.preventDefault();
//   };

    // window.onload = async () => {
    //     const response = await axios.get('http://localhost:8080/Project2/user/findbyusername', {
    //         params: {
    //             user: activeUser
    //         }
    //     });
    //     activeUser = response.data;
    //     console.log(response.data);
    // }
    // console.log(loadState().username);


// function LoginComponent(props: ILoginProps) {

//     const classes = useStyles();

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     let updateUsername = (e: any) => {
//         setUsername(e.currentTarget.value);
//     }

//     let updatePassword = (e: any) => {
//         setPassword(e.currentTarget.value);
//     }

//     let login = async () => {
//         props.loginAction(username, password);
//     }


  const handleLogin = () => {
        if (state.username === 'abc@email.com' && state.password === 'password') {
            dispatch({
            type: 'loginSuccess',
            payload: 'Login Successfully'
            });
        } else {
            dispatch({
            type: 'loginFailed',
            payload: 'Incorrect username or password'
            });
        }
        };
        

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

 
  return (
 //     props.authUser ?
 //     <Redirect to="/home" /> :

    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login" />
        <CardContent>
          <div>
            <TextField
              error={state.isError}
              fullWidth
              id="username"
              type="email"
              label="Username"
              placeholder="Username"
              margin="normal"
              onKeyPress={handleKeyPress}
            />
            <TextField
              error={state.isError}
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
              helperText={state.helperText}
              onKeyPress={handleKeyPress}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
            onClick={handleLogin}
            disabled={state.isButtonDisabled}>
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

export default Login;