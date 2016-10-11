var {Route, Router, IndexRoute, hashHistory} = require('react-router');import _ from 'lodash';import React, { Component} from 'react';import ReactDOM from 'react-dom';import { Provider } from 'react-redux';import { createStore, applyMiddleware } from 'redux';import ReduxPromise from 'redux-promise';import App from 'app';import reducers from 'reducers';const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);// Load bootstrap require('style!css!bootstrap/dist/css/bootstrap.min.css')// App cssrequire('style!css!applicationStyles');ReactDOM.render(	<Provider store={createStoreWithMiddleware(reducers)}>		<App />	</Provider>,    document.getElementById('container'));