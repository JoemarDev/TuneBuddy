import { GetSearchMetaData } from "../../api/Spotify";
import { createAction } from "../../utils/reducers/reducer.utils";
import { SEARCH_ACTION_TYPES } from "./search.types";


export const fetchSearchStart = () => 
    createAction(SEARCH_ACTION_TYPES.FETCH_SEARCH_START);

export const fetchSearchFailed = (error) =>
    createAction(SEARCH_ACTION_TYPES.FETCH_SEARCH_FAILED,error);

export const fetchSearchSuccess = (result) =>
    createAction(SEARCH_ACTION_TYPES.FETCH_SEARCH_SUCCESS, result);

export const cacheSearchResult = (result) =>
    createAction(SEARCH_ACTION_TYPES.CACHE_SEARCH , result);

export const resetSearch = (result) => 
    createAction(SEARCH_ACTION_TYPES.RESET_SEARCH);
    
export const fetchSearchResultAsync = (word) => async(dispatch) => {
    dispatch(fetchSearchStart());

    try {
        const SearchResult = await GetSearchMetaData(word);
        dispatch(fetchSearchSuccess(SearchResult));
        dispatch(cacheSearchResult(SearchResult));
    } catch (error) {   
        dispatch(fetchSearchFailed(error));
    }
}