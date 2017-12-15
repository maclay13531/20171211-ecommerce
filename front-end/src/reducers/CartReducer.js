export default function(state = [], action){
	console.log(action);
	if(action.type === "UPDATE_CART"){
		return action.payload.data
	}else{
		return state;	
	}
}