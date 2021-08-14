const moviesInitialState = [];

const MoviesReducers = (state = moviesInitialState, action) => {
   switch (action.type) {
      case 'ADD_MOVIE': {
         return [...state, { ...action.payload }];
      }

      case 'REMOVE_MOVIE': {
         return state.filter((ele) => ele.name !== action.payload);
      }

      default: {
         return [...state];
      }
   }
};

export default MoviesReducers;
