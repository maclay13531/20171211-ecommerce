// An action is a javascript function that returns an object
// that object must have at least a property of TYPE

import axios from 'axios';

export default function(formData){
	console.log("Auth action is running");
	console.log(formData);
	var axiosPromise = axios({
		url: `${window.apiHost}/register`,
		method: "POST",
		data: formData
	})
	// our redux-promise middleware will kick in
	// because the payload value is a promise
	// redux-promise will hold up the dispatch until it resolves
	return{
		type: "AUTH_ACTION",
		payload: axiosPromise
	}
}
