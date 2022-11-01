import { ALBUM_ACTION_TYPES } from "./album.types";

const ALBUM_INITIAL_STATE = {
    currentAlbum : [],
    cachedAlbums : [],
    isLoading : false,
    isError : false,
}

export const AlbumReducer = (
    state = ALBUM_INITIAL_STATE,
    action = {},
) => {
    const {type, payload} = action;

    switch(type) {
        case ALBUM_ACTION_TYPES.FETCH_ALBUM_START:
            return {...state , isLoading : true};

        case ALBUM_ACTION_TYPES.FETCH_ALBUM_SUCCESS:
            return {...state , isLoading : false , currentAlbum : payload};

        case ALBUM_ACTION_TYPES.FETCH_ALBUM_FAILED :
            return {...state , isLoading : false , isError: true};

        case ALBUM_ACTION_TYPES.CACHE_ALBUM:

            return {...state , cachedAlbums : [...state.cachedAlbums , payload]}
            
        default : 
            return state;
    }
}