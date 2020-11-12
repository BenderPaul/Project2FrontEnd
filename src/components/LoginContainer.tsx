
import { IState } from "../interfaces";
import { connect } from "react-redux";
import LoginComponent from "./Login";

const mapStateToProps = (state: IState) => {
    return {
        username: state.UserState.username,
        password: state.UserState.password,
    }
}


export default connect(mapStateToProps)(LoginComponent);