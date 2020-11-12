import { connect } from 'react-redux';
import { IState } from '../interfaces';
import { Home } from './Home';

const mapStateToProps = (state:IState) => {
    return {
        ...state.UserState
    };
}

//sends full props (state and dispatch action) to component described in second parentheses
export default connect(mapStateToProps)(Home);