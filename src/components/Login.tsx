import React, { useState } from "react";
import { makeStyles, createStyles, Theme, TextField } from "@material-ui/core";

import {  Card,  CardHeader, Button, Alert } from 'reactstrap';
// import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { baseUrl } from "../interfaces";
import Axios from "axios";
import { saveState } from "../Store";
import { JsxEmit, setConstantValue } from "typescript";
// import CardHeader from '@material-ui/core/CardHeader';
// import Button from '@material-ui/core/Button';

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
      background: '#ba55d3',
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

//   useEffect(() => {
//     if (state.username.trim() && state.password.trim()) {
//      dispatch({
//        type: 'setIsButtonDisabled',
//        payload: false
//      });
//     } else {
//       dispatch({
//         type: 'setIsButtonDisabled',
//         payload: true
//       });
//     }
//   }, [state.username, state.password]);

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

    const [problem, setProblem] = useState();

    const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = e.currentTarget["username"].value;
        const pass = e.currentTarget["password"].value;

        const response = await Axios.post(`${baseUrl}/user/login`, {
            username: user,
            password: pass
        });

        if (await response.data){
            saveState(user);
            window.location.pathname = "/profile";
        }
        else {     
            console.log("invalid credentials")
            // setProblem(failedLogin());
        }
    }

    const failedLogin = () => {
        return(
            <Alert variant = 'danger'>
                Invalid Login Credentials
            </Alert>
        )
    }

    
//   const handleKeyPress = (event: React.KeyboardEvent) => {
//     if (event.keyCode === 13 || event.which === 13) {
    //   state.isButtonDisabled || handleLogin();
//     }
//   };

 
  return (
    <div>
        {problem}
        <form data-testid="loginForm" className={classes.container} noValidate autoComplete="off" onSubmit={handleLogin}>
        <Card className={classes.card}>
            <CardHeader className={classes.header} title=" Login " />
            <CardContent>
            <div>
                <TextField
                //   error={"no"}
                fullWidth
                id="username"
                type="text"
                label="Username"
                placeholder="Username"
                margin="normal"
                name="username"
                //onKeyPress={handleKeyPress}
                />
                <TextField
                //   error={state.isError}
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                name="password"
                //   helperText={state.helperText}
                //onKeyPress={handleKeyPress}
                />
            </div>
            </CardContent>
            <CardActions>
            <Button
                variant="contained"
                size="large"
                type="submit"
                color="secondary"
                className={classes.loginBtn}
            /*disabled={state.isButtonDisabled}*/>
                Login
            </Button>
            </CardActions>
        </Card>
        </form>
    </div>
  );
}

export default Login;