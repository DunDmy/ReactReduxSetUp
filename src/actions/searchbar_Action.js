/*
* Action for the search field
*/
import {CHANGE_SEARCH_FIELD} from '../constants/constants';

// search field
export const setSearchField = (text) => (
{
	type: CHANGE_SEARCH_FIELD,
	payload: text
});