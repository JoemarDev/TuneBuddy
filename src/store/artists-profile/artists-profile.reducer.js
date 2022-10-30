import { ARTISTS_PROFILE_ACTION_TYPES } from "./artists-profile.types";

const ARTISTS_PROFILE_INITIAL_STATE = {
    currentArtist : [],
    cachedArtistProfile : [],
    isLoading : false,
    error : null,
}

export const ArtistsProfileReducer = (
    state = ARTISTS_PROFILE_INITIAL_STATE,
    action = {}
) => {

    const {type , payload} = action;
        
    switch(type){
        case ARTISTS_PROFILE_ACTION_TYPES.FETCH_ARTISTS_PROFILE_START:
            return {...state , isLoading : true}
        case ARTISTS_PROFILE_ACTION_TYPES.FETCH_ARTISTS_PROFILE_SUCCESS:
            return {...state , currentArtist : payload, isLoading : false} 
        case ARTISTS_PROFILE_ACTION_TYPES.FETCH_ARTISTS_PROFILE_FAILED:
            return {...state , error : payload , isLoading : false}
        case ARTISTS_PROFILE_ACTION_TYPES.CACHED_ARTISTS_PROFILE:
            return {...state , cachedArtistProfile : [...state.cachedArtistProfile , payload]}
        default :
            return state
    }
}