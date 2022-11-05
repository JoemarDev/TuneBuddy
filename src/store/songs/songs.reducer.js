import { SONGS_ACTION_TYPES } from "./songs.types";

const SONGS_INITIAL_STATE = {
    currentSong : [],
    trackDetail : [],
    TracksQueue : [],
    songDefaultImage : process.env.PUBLIC_URL+'/images/black.webp',
    retryCount : 0,
    CurrentActiveQueue : 0,
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
            return {...state, trackDetail : payload , trackLoading: false , SetFetchSongRetry : 0}

        case SONGS_ACTION_TYPES.FETCH_TRACK_DETAIL_FAILED:
            return {...state, trackLoading : false , error : payload}
        
        case SONGS_ACTION_TYPES.SET_QUEUE_LISTS:
            return {...state , TracksQueue : payload}
            
        case SONGS_ACTION_TYPES.SET_CURRENT_QUEUE:
            return {...state , CurrentActiveQueue : payload}

        case SONGS_ACTION_TYPES.SET_FETCH_SONG_RETRY:
            return {...state , SetFetchSongRetry : payload}
        
        case SONGS_ACTION_TYPES.SET_SONG_DEFAULT_IMAGE:
            return {...state , songDefaultImage:  payload}

        case SONGS_ACTION_TYPES.GET_NEW_TRACK_QUEUE:
            return {...state , TracksQueue: payload}

        default : return state;
    }
}