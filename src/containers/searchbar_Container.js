/*
* Container for the search bar that uses the Redux structure
*/
import React, {Component} from 'react';
//Redux lib
import {bindActionCreator} from 'redux';
import {connect} from 'react-redux';
//searchbar Component
import SearchBox from '../components/searchbar_Component.js';
//import action
import {setSearchField} from '../actions/searchbar_Action.js'

//access props from global object
const mapStateToProps = (state) => {
	console.log(state);
	return{
		searchField: state
	}
}

//dispatch action
const mapDispatchToProps = (dispatch) => {
	return{
		searchField: (event) => dispatch(setSearchField(event))
	}
}

class Search extends React.Component{
	render(){
		const {searchField} = this.props;
		return(
			<SearchBox searchChange={searchField}></SearchBox>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);