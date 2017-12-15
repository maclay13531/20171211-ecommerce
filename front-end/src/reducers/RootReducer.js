// This is the master or root reducer
// each reducer contains piece of state. 
// Root reducer contains all the reducers
// I.E, the root reducer contains all pieces of state,
// or the entire application state.

// In order to get all the "little" reducers or pieces of state
// into one big, "root" reducer, we need the combineReducers method from redux
import { combineReducers } from 'redux';

// import each individual reducer to hand to combineReducers
// first: AuthReducer
import AuthReducer from './AuthReducer';
import ProductLineReducer from './ProductLineReducer';
import CartReducer from './CartReducer';

// combineReducers takes an object as an arg
// that arg has key:value pair = stateName: reducerFunction
// the reduceFunction will return a value
const rootReducer = combineReducers({
	auth: AuthReducer,
	pl: ProductLineReducer,
	cart: CartReducer
})

export default rootReducer;