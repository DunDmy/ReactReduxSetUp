/*
* Search bar component
*/
import React from 'react';

//searchbox
const SearchBox = ({searchChange}) => {

	//submit input on click and prevent page refresh
	function updateOnSearchChange(event){
		console.log(searchChange);
		event.preventDefault();
		searchChange(document.getElementById('urlSearch').value);

	}
	console.log(searchChange);
	return(
			<button className="button__searchbar" type="submit" onClick={updateOnSearchChange}>Search</button>
		);
}

export default SearchBox;

