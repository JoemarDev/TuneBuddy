import { SONGS_ACTION_TYPES } from "./songs.types";
import { createAction } from "../../utils/reducers/reducer.utils";
import { DownloadTrack } from "../../api/Spotify";
import { SetPlayerLastPosition } from "../player/player.action";
import { CachedSong } from "../songs-temp/songs-temp.actions";

export const SetCurrentSong = (SongData) => 
    createAction(SONGS_ACTION_TYPES.SET_SONG , SongData);

export const fetchTrackDetailStart = () =>
    createAction(SONGS_ACTION_TYPES.FETCH_TRACK_DETAIL_START);

export const fetchTrackDetailSuccess = (track) => 
    createAction(SONGS_ACTION_TYPES.FETCH_TRACK_DETAIL_SUCCESS , track);

export const fetchTrackDetailFailed = (error) => 
    createAction(SONGS_ACTION_TYPES.FETCH_TRACK_DETAIL_FAILED , error);

export const SetCurrentActiveQueue = (index) => (dispatch) => 
    dispatch(createAction(SONGS_ACTION_TYPES.SET_CURRENT_QUEUE , index));

export const SetQueueLists = (tracksArray) => (dispatch) =>
    dispatch(createAction(SONGS_ACTION_TYPES.SET_QUEUE_LISTS , tracksArray));

export const SetFetchSongRetry = (retry) => (dispatch) =>
    dispatch(createAction(SONGS_ACTION_TYPES.SET_FETCH_SONG_RETRY , retry));

export const SetSongDefaultImage = (img) => (dispatch) => 
    dispatch(createAction(SONGS_ACTION_TYPES.SET_SONG_DEFAULT_IMAGE , img));
    
export const fetchTrackAsync = (trackID) => async(dispatch) => {
    dispatch(fetchTrackDetailStart());

    try {
        let track = await DownloadTrack(trackID);
        dispatch(CachedSong({...track , trackID}));
        dispatch(fetchTrackDetailSuccess(track));
        dispatch(SetPlayerLastPosition(0));
    } catch (error) {
        dispatch(fetchTrackDetailFailed(error));
    }
} 

