import React from "react";
import { makeStyles, createStyles, Theme, TextField } from "@material-ui/core";

import {  Card,  CardHeader, Button } from 'reactstrap';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { baseUrl } from "../interfaces";
import Axios from "axios";
import { saveState } from "../Store";


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
    },
    forgot: {
      textAlign: "center"
    }
  })
);

export const Login: React.FC = () => {
    const classes = useStyles();

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
            alert("Invalid Credentials")
        }
    }
 
  return (
    <div>
        <form data-testid="loginForm" className={classes.container} noValidate autoComplete="off" onSubmit={handleLogin}>
        <Card className={classes.card}>
            <CardHeader className={classes.header} title="Login" />
            <CardContent>
            <div>
                <TextField
                fullWidth
                id="username"
                type="text"
                label="Username"
                placeholder="Username"
                margin="normal"
                name="username"
                />
                <TextField
                fullWidth
                id="password"
                type="password"
                label="Password"
                placeholder="Password"
                margin="normal"
                name="password"
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
            >
                Login
            </Button>
            </CardActions>

            <a id="forgot" className={classes.forgot} href="/forgot">Forgot Password?</a>
        </Card>
        </form>
    </div>
  );
}

export default Login;