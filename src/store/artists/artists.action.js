import { ARTISTS_ACTION_TYPES } from "./artists.types";
import { createAction } from "../../utils/reducers/reducer.utils";
import { GetTopArtists } from "../../api/Spotify";

export const fetchArtistsStart = () =>
    createAction(ARTISTS_ACTION_TYPES.FETCH_ARTISTS_START);

export const fetchArtistsSuccess = (ArtistsData) => 
    createAction(ARTISTS_ACTION_TYPES.FETCH_ARTISTS_SUCCESS , ArtistsData);

export const  fetchArtistsFailed = (error) => 
    createAction(ARTISTS_ACTION_TYPES.FETCH_ARTISTS_FAILED , error);

export const GetArtistsAsync = () => async(dispatch) => {
    dispatch(fetchArtistsStart());
    try {
        const ArtistsData = await GetTopArtists();
        dispatch(fetchArtistsSuccess(ArtistsData));
    
    } catch (error) {
        dispatch(fetchArtistsFailed(error));
    }
} 

