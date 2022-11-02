import { GetTracksLyrics, GetTracksMetaData } from "../../api/Spotify";
import { createAction } from "../../utils/reducers/reducer.utils";
import { TRACK_ACTION_TYPES } from "./track.types";

export const fetchTrackStart = () => 
    createAction(TRACK_ACTION_TYPES.FETCH_TRACK_START);

export const fetchTrackSuccess = (track) =>
    createAction(TRACK_ACTION_TYPES.FETCH_TRACK_SUCCESS , track);

export const fetchTrackFailed = (error) =>
    createAction(TRACK_ACTION_TYPES.FETCH_TRACK_FAILED , error);

export const cacheTrack = (track) => 
    createAction(TRACK_ACTION_TYPES.CACHE_TRACK , track);

export const fetchTrackAsync = (track_id) => async(dispatch) => {
    
    dispatch(fetchTrackStart());

    try {
        const TrackResult = await GetTracksMetaData(track_id);
        const TrackLyrics = await GetTracksLyrics(track_id);
        const TrackData = {TrackResult,TrackLyrics}
        dispatch(fetchTrackSuccess(TrackData));
        dispatch(cacheTrack(TrackData));
    } catch (error) {
        dispatch(fetchTrackFailed(error));
    }
}