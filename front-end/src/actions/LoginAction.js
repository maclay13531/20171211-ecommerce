import axios from 'axios';

export default function(formData){
	var axiosPromise = axios({
		method: "POST",
		url: `${window.apiHost}/login`,
		data: formData

	})
	console.log("login action running")
	return{
		type: "AUTH_ACTION",
		payload: axiosPromise
	}
}