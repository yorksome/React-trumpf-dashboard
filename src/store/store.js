import reducers from './reducers/index';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';

const store = createStore(
    reducers,
    applyMiddleware(
      reduxLogger,
      reduxThunk
    )
)

export default store;