import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import App from './App';
import MachineDetail from './home/machine-detail/Machine-detail';
import PageNotFound from './notFound';
import * as serviceWorker from './serviceWorker';
import HomepageOverlay from './home/homepage-overlay/Homepage-overlay';
import customHistory from './history';


ReactDOM.render(
    <Provider store={store}>
        <Router history={customHistory}>
          <HomepageOverlay />
          <Switch>
            <Route exact path="/" component= {App} />
            <Route exact path="/:id?" component= {MachineDetail} />
            <Route component= {PageNotFound} />
          </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
