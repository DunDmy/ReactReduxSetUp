/*
* Reducer for the search component
*/
import {CHANGE_SEARCH_FIELD} from '../constants/constants';

const initialState = {
	searchField: ''
};

export const searchURL = (state = initialState, action) => {
	console.log(state);
	console.log(action);
	switch(action.type){
		case "CHANGE_SEARCH_FIELD":
			return state;
		default:
			return state;
	}
}