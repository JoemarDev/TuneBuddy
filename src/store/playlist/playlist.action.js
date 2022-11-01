import { GetPlaylistMetaData, GetPlaylistTracksData } from "../../api/Spotify";
import { createAction } from "../../utils/reducers/reducer.utils";
import { PLAYLIST_ACTION_TYPES } from "./playlist.types";

export const fetchPlaylistStart = () =>
    createAction(PLAYLIST_ACTION_TYPES.FETCH_PLAYLIST_START);

export const fetchPlaylistFailed = (error) => 
    createAction(PLAYLIST_ACTION_TYPES.FETCH_PLAYLIST_FAILED , error);

export const fetchPlaylistSuccess = (playlist) => 
    createAction(PLAYLIST_ACTION_TYPES.FETCH_PLAYLIST_SUCCESS, playlist);

export const cachePlaylists = (playlist) =>
    createAction(PLAYLIST_ACTION_TYPES.CACHE_PLAYLIST , playlist)

export const fetchPlaylistAsync = (playlist_id) => async(dispatch) => {
    
    dispatch(fetchPlaylistStart());

    try {

        const PlaylistMetaData = await GetPlaylistMetaData(playlist_id);

        const PlaylistTracks = await GetPlaylistTracksData(playlist_id);

        const PlaylistRes = {PlaylistMetaData,PlaylistTracks};

        dispatch(fetchPlaylistSuccess(PlaylistRes));

        dispatch(cachePlaylists(PlaylistRes));

    } catch (error) {   
        dispatch(fetchPlaylistSuccess(error));
    }
}