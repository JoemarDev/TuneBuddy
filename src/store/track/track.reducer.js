import { TRACK_ACTION_TYPES } from "./track.types";

const TRACK_INITIAL_STATE = {
    currentTrack : [],
    cachedTracks : [],
    isLoading : false,
    isError : false,
}

export const TrackReducer =(
    state = TRACK_INITIAL_STATE,
    action = {}
) => {
    const {type, payload} = action;

    switch(type) { 
        case TRACK_ACTION_TYPES.FETCH_TRACK_START:
            return {...state, isLoading :true};
        case TRACK_ACTION_TYPES.FETCH_TRACK_SUCCESS:
            return {...state , isLoading : false , currentTrack : payload , isError : false};
        case TRACK_ACTION_TYPES.FETCH_TRACK_FAILED:
            return {...state , isLoading : false , isError: true};
        case TRACK_ACTION_TYPES.CACHE_TRACK:
            return {...state , cachedTracks : [...state.cachedTracks , payload]};
        default :
            return state;
    }
}