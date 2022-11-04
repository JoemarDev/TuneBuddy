import { GetGenreMetaData } from "../../api/Spotify";
import { createAction } from "../../utils/reducers/reducer.utils";
import { GENRE_ACTION_TYPES } from "./genre.types";

export const fetchGenreStart = () =>
    createAction(GENRE_ACTION_TYPES.FETCH_GENRE_START);

export const fetchGenreFailed = (error) => 
    createAction(GENRE_ACTION_TYPES.FETCH_GENRE_FAILED , error);

export const fetchGenreSuccess = (genre) => 
    createAction(GENRE_ACTION_TYPES.FETCH_GENRE_SUCCESS, genre);

export const cacheGenreMetaData = (genre) =>
    createAction(GENRE_ACTION_TYPES.CACHE_GENRE, genre);

export const fetchGenreAsync = (genre_id) => async(dispatch) => {
    
    dispatch(fetchGenreStart());

    try {
        const GenreMetaData = await GetGenreMetaData(genre_id);
        dispatch(fetchGenreSuccess(GenreMetaData));
        dispatch(cacheGenreMetaData(GenreMetaData));
    } catch (error) {
        dispatch(fetchGenreFailed(error));
    }
}