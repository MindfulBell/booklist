import React, { Component } from 'react';
import { connect } from 'react-redux'; //glue between react and redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; //use to take the action from the action creator, and flow it through all the reducers

class BookList extends Component {

	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
				key={book.title}
				onClick={() => this.props.selectBook(book)}
				className='list-group-item'>{book.title}
				</li>
			)
		})
	}

	render() {
		return (
			<ul className='list-group col-sm-4'>
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {

	return {
		books: state.books
	};
}
// does what it says; takes app state as an argument
// and sets it as props to BookList
// will be set === to this.props for the component itself



// anything returned from this function will end up as props on
// BookList container
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed
	// to all reducers with dispatch, that is what bindActionCreators does!
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}


// connect will update the app i.e. re-render it any time state changes
// Promote BookList from a component to a container - it needs to know about
// dispatch method, selectBook. Make available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList); //produces a container, a component aware of state contained by redux



/* NOTES

Containers are the components that are concered with state and actually help
bridge the gap between React (visual/UI) and Redux(State). 

You generally want the most parent component that cares about state to be a container
Note, App.js doesn't care about state (although it is the most parent)

Note, this is only done with an additional library: react-redux

*/