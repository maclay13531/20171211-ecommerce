// REUCER is a function that returns a piece of state
export default function(state = [], action){
	console.log(action);
	if(action.type === "AUTH_ACTION"){
		return action.payload
	}else{
		return state;	
	}
}