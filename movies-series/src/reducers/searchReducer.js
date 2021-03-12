import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE,
  LOADING,
  LOADING_MOVIE_DETAIL
} from '../actions/types';

const initialState = {
  text: '',
  movies: [],
  loading: false,
  loaddingMovieDetail: false,
  movie: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false,
        loaddingMovieDetail: false
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
        loaddingMovieDetail: false
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
        loaddingMovieDetail: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
      case LOADING_MOVIE_DETAIL:
        return {
          ...state,
          loaddingMovieDetail: true
        }
    default:
      return state;
  }
}