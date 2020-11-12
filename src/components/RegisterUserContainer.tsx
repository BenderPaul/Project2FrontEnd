import { connect } from "react-redux";
import { registerUser } from "../action-mappers/userActions";
import { IState } from "../interfaces";
import { RegisterUser } from "./RegisterUser";

//takes in the global state, adds user information from the state
const mapStateToProps = (state:IState) => {
    return {
        username: state.UserState.username,
        password: state.UserState.password,
        firstName: state.UserState.firstname,
        lastName: state.UserState.lastname,
        email: state.UserState.email
    };
}

//sets action to be used as props
const mapDispatchToProps = {dispatchEvent: registerUser};

//sends full props (state and dispatch action) to component described in second parentheses
export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);