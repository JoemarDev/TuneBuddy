import { SONGS_ACTION_TYPES } from "./songs.types";

const SONGS_INITIAL_STATE = {
    currentSong : [],
    trackDetail : [],
    isTrackPlay : false,
    trackLoading : false,
    trackError : false,
}


export const SongsReducer = (
    state = SONGS_INITIAL_STATE,
    action = {}
) => {
    const {type , payload} = action;

    switch(type) {
        case SONGS_ACTION_TYPES.SET_SONG:
            return {...state , currentSong : payload}

        case SONGS_ACTION_TYPES.FETCH_TRACK_DETAIL_START:
            return {...state , trackLoading : true }

        case SONGS_ACTION_TYPES.FETCH_TRACK_DETAIL_SUCCESS:
            return {...state, trackDetail : payload , trackLoading: false}

        case SONGS_ACTION_TYPES.FETCH_TRACK_DETAIL_FAILED:
            return {...state, trackLoading : false , error : payload}
            
        default : return state;
    }
}