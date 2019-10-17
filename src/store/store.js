import reducer from './reducers/index';
import reduxLogger from 'redux-logger';
import { createStore, applyMiddleware} from 'redux';

// let store = createStore(reducer);

export default applyMiddleware(reduxLogger)(createStore)(reducer);