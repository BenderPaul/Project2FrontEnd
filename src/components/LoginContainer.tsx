
import { IState } from "../interfaces";
import { loginAction } from "../action-mappers/loginAction";
import { connect } from "react-redux";
import LoginComponent from "./Login";

const mapStateToProps = (state: IState) => {
    return {
        username: state.UserState.username,
        password: state.UserState.password,
    }
}

const mapDispatchToProps = {loginAction}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);