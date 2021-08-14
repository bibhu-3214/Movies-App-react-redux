import { createStore, combineReducers } from 'redux';
import MoviesReducers from '../reducers/MoviesReducer';

const configureStore = () => {
   const store = createStore(
      combineReducers({
         movies: MoviesReducers,
      }),
   );
   return store;
};

export default configureStore;
