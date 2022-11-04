import { GENRE_ACTION_TYPES } from "./genre.types";

const GENRE_INITIAL_STATE = {
    currentGenre : [],
    cachedGenre : [],
    isLoading : false,
    isError : false,
}

export const GenreReducer = (
    state = GENRE_INITIAL_STATE,
    action = {}
) => {
    const {type , payload} = action;

    switch(type) {
        case GENRE_ACTION_TYPES.FETCH_GENRE_START:
            return {...state , isLoading : true}
        case GENRE_ACTION_TYPES.FETCH_GENRE_FAILED:
            return {...state , isLoading : false , isError : true};
        case GENRE_ACTION_TYPES.FETCH_GENRE_SUCCESS:
            return {...state , isLoading : false , currentGenre : payload}
        case GENRE_ACTION_TYPES.CACHE_GENRE:
            return {...state , cachedGenre : [...state.cachedGenre , payload]}
        default : return state;
    }
}
