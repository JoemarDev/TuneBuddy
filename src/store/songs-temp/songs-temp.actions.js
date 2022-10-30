import { SONG_TEMP_ACTION_TYPES } from "./songs-temp.types";
import { createAction } from "../../utils/reducers/reducer.utils";

export const CachedSong = (song) => dispatch => 
    dispatch(createAction(SONG_TEMP_ACTION_TYPES.CACHED_SONG , song));
