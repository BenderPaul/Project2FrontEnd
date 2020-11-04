import { connect } from "react-redux";
import { addUser } from "../action-mappers/userActions";
import App from "../App";
import { IState } from "../interfaces";

//takes in the global state, adds user information from the state
const mapStateToProps = (state:IState) => {
    return {
        username: state.UserState.username,
        password: state.UserState.password,
        firstName: state.UserState.firstName,
        lastName: state.UserState.lastName,
        email: state.UserState.email
    };
}

//sets action to be used as props
const mapDispatchToProps = {dispatchEvent: addUser};

//sends full props (state and dispatch action) to component described in second parentheses
export default connect(mapStateToProps, mapDispatchToProps)(App);