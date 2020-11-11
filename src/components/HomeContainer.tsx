import { connect } from 'react-redux';
import { registerUser } from '../action-mappers/userActions';
import { IState } from '../interfaces';
import { Home } from './Home';

const mapStateToProps = (state:IState) => {
    return {
        ...state.UserState
    };
}

//sets action to be used as props
//const mapDispatchToProps = {dispatchEvent: registerUser};

//sends full props (state and dispatch action) to component described in second parentheses
export default connect(mapStateToProps)(Home);