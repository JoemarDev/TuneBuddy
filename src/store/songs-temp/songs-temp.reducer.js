import { SONG_TEMP_ACTION_TYPES } from "./songs-temp.types";

const SONG_TEMP_INITIAL_STATE = {
    cachedSongs : [],
}

export const SongsTempReducer = (
    state = SONG_TEMP_INITIAL_STATE,
    action = {}
) => {
    const {type , payload} = action;

    switch(type) {

        case SONG_TEMP_ACTION_TYPES.CACHED_SONG:
            return {...state , cachedSongs :  [...state.cachedSongs , payload]}

        default : return state;
    }
}