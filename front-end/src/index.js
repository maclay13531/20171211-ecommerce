import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import Student from './Student';
// get the createStore method from the redux module
// as well as the applyMiddleWare method
import { createStore, applyMiddleware} from 'redux';
// createStore needs a reducer. More specifically, a root reducer
import RootReducer from './reducers/RootReducer';
// we are going to need AJAX a lot. We will use it in our
// redux actions which means... we need redux-promise.
import reduxPromise from 'redux-promise';   // <--    MIDDLEWARE

// we have set up redux. Now we need a way to tell REACT about it.
// PROVIDER!
import { Provider } from 'react-redux';

// create the store... the ugly way
// const theStore = applyMiddleware(reduxPromise)(createStore)(RootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// the friendly way
const middleWare = applyMiddleware(reduxPromise);
const storeWithMid = middleWare(createStore);
const theStore = storeWithMid(RootReducer);


// Hand render the Provider and hand provider thestore.
// put app inside of the proivder so that everything inside of app
// will know about the provider/thestore
ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
