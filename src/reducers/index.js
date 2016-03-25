import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//just a function tim, looks kooky, but combineReducers is just a function
//tells redux how to set up the state, combines all the reducers...books with a list of objects
const rootReducer = combineReducers ({ 
	books: BooksReducer,
	activeBook: ActiveBook
})

export default rootReducer;

// is this kind of where state lives??