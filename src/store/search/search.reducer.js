import { SEARCH_ACTION_TYPES } from "./search.types";

const SEARCH_INITIAL_STATE = {
    currentSearch : null,
    cachedSearch : [],
    isLoading : false,
    isError : false,
}

export const SearchReducer = (
    state = SEARCH_INITIAL_STATE,
    action = {}
) => {
    const {type, payload} = action;
    
    switch(type) {
        case SEARCH_ACTION_TYPES.FETCH_SEARCH_START:
            return {...state , isLoading : true};
        case SEARCH_ACTION_TYPES.FETCH_SEARCH_FAILED:
            return {...state , isLoading : false , isError : true};
        case SEARCH_ACTION_TYPES.FETCH_SEARCH_SUCCESS :
            return {...state, isLoading : false , currentSearch : payload}
        case SEARCH_ACTION_TYPES.CACHE_SEARCH:
            return {...state , cachedSearch : [...state.cachedSearch , payload]}
        case SEARCH_ACTION_TYPES.RESET_SEARCH:
            return {...state , currentSearch : null }
        default : return state;
    }
}