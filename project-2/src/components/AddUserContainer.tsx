import { connect } from "react-redux";
import { addUser } from "../store/UserRegister/actionCreators";
import { IState } from "../type";
import { AddUser } from "./AddUser";

const mapStateToProps = (state:IState) => {
    return {
        id: state.UserState.id,
        username: state.UserState.username,
        password: state.UserState.password,
        firstName: state.UserState.firstName,
        lastName: state.UserState.lastName,
        email: state.UserState.email
    };
}

const mapDispatchToProps = {dispatchEvent: addUser};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);