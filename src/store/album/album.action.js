import { GetAlbumMetaData, GetAlbumTracksData } from "../../api/Spotify";
import { createAction } from "../../utils/reducers/reducer.utils";
import { ALBUM_ACTION_TYPES } from "./album.types";

export const fetchAlbumStart = () =>
    createAction(ALBUM_ACTION_TYPES.FETCH_ALBUM_START);

export const fetchAlbumFailed = (error) =>
    createAction(ALBUM_ACTION_TYPES.FETCH_ALBUM_START, error);

export const fetchAlbumSuccess = (album) => 
    createAction(ALBUM_ACTION_TYPES.FETCH_ALBUM_SUCCESS, album);

export const cacheAlbum = (album) =>  
    createAction(ALBUM_ACTION_TYPES.CACHE_ALBUM , album);

export const fetchAlbumAsync = (album_id) => async(dispatch) => {

    dispatch(fetchAlbumStart());

    try {

        const AlbumMetaData = await GetAlbumMetaData(album_id);

        const AlbumTracks = await GetAlbumTracksData(album_id);

        const AlbumRes = {AlbumMetaData,AlbumTracks};
        
        dispatch(fetchAlbumSuccess(AlbumRes));

        dispatch(cacheAlbum(AlbumRes));

    } catch (error) {
        dispatch(fetchAlbumFailed(error));
    }
}