import {compose, createStore, Store} from 'redux';
import { state } from './store/index';

const a:any = window;

const composeEnhancers = 
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers();

export const store: Store<any> = createStore(state, enhancer);