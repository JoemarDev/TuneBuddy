import { PLAYLIST_ACTION_TYPES } from "./playlist.types";


const PLAYLIST_INITITAL_STATE = {
    currentPlaylist : [],
    cachedPlaylists: [],
    isLoading : false,
    isError : false,
}

export const PlaylistReducer = (
    state = PLAYLIST_INITITAL_STATE,
    action = {}
) => {

    const {type , payload} = action;

    switch(type) {
        case PLAYLIST_ACTION_TYPES.FETCH_PLAYLIST_START:
            return {...state  , isLoading : true};

        case PLAYLIST_ACTION_TYPES.FETCH_PLAYLIST_SUCCESS:
            return {...state  , isLoading : false , currentPlaylist : payload , isError: false};

        case PLAYLIST_ACTION_TYPES.FETCH_PLAYLIST_FAILED:
            return {...state , isLoading : false, isError : true};

        case PLAYLIST_ACTION_TYPES.CACHE_PLAYLIST:
            return {...state , cachedPlaylists : [...state.cachedPlaylists , payload]}

        default :
            return state;
    }

}