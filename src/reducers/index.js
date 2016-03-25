import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//just a function time, looks kooky, but combineReducers is just a function
//tells redux how to set up the state, combines all the reducers...books with a list of objects
const rootReducer = combineReducers ({ 
	books: BooksReducer
})

export default rootReducer;