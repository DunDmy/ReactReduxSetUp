import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Redux lib
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import thunk from 'redux-thunk';

//ect
import {master_Reducer} from './reducers/master_Reducer';


const store = createStore(master_Reducer, applyMiddleware(thunk));
console.log("GLOBAL OBJECT: ", store);

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
