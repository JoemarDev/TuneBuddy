import { SONGS_ACTION_TYPES } from "./songs.types";
import { createAction } from "../../utils/reducers/reducer.utils";
import { DownloadTrack } from "../../api/Spotify";

export const SetCurrentSong = (SongData) => 
    createAction(SONGS_ACTION_TYPES.SET_SONG , SongData);

export const fetchTrackDetailStart = () =>
    createAction(SONGS_ACTION_TYPES.FETCH_TRACK_DETAIL_START);

export const fetchTrackDetailSuccess = (track) => 
    createAction(SONGS_ACTION_TYPES.FETCH_TRACK_DETAIL_SUCCESS , track);

export const fetchTrackDetailFailed = (error) => 
    createAction(SONGS_ACTION_TYPES.FETCH_TRACK_DETAIL_FAILED , error);


export const fetchTrackAsync = (trackID) => async(dispatch) => {

    dispatch(fetchTrackDetailStart())
    try {
        let track = await DownloadTrack(trackID);
        dispatch(fetchTrackDetailSuccess(track));
    } catch (error) {
        dispatch(fetchTrackDetailFailed(error));
    }
} 


