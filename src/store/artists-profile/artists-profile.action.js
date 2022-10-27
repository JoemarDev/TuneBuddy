import { ARTISTS_PROFILE_ACTION_TYPES } from "./artists-profile.types";
import { createAction } from "../../utils/reducers/reducer.utils";
import { GetArtistsProfileData } from "../../api/Spotify";

export const fetchArtistProfileStart = () => 
    createAction(ARTISTS_PROFILE_ACTION_TYPES.FETCH_ARTISTS_PROFILE_START);


export const GetArtistProfileSuccess = (ArtistProfile) => 
    createAction(ARTISTS_PROFILE_ACTION_TYPES.FETCH_ARTISTS_PROFILE_SUCCESS , ArtistProfile);


export const GetArtistProfileFailed = (error) => 
    createAction(ARTISTS_PROFILE_ACTION_TYPES.FETCH_ARTISTS_PROFILE_FAILED , error);


export const GetArtistProfileAsync = (artistID) => async (dispatch) => {
    dispatch(fetchArtistProfileStart());
    try {
        
        const ArtistProfile = await GetArtistsProfileData(artistID);
        dispatch(GetArtistProfileSuccess(ArtistProfile));
    } catch (error) {
        dispatch(GetArtistProfileFailed(error)); 
    } 
}