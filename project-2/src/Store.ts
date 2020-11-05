import {compose, createStore, Store} from 'redux';
import { state } from './reducers/index';


const composeEnhancers = 
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//custom middleware for dispatching
const enhancer = composeEnhancers();

//reference to global store, call this to dispatch actions
export const store: Store<any> = createStore(state, enhancer);