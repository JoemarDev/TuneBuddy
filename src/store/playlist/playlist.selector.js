import { createSelector } from "reselect";

export const PlaylistSelector = (state) => state.Playlist;

export const SelectIsPlaylistLoading = createSelector(
    [PlaylistSelector],
    (PlaylistSlice) => {
        return PlaylistSlice.isLoading
    }
)


export const SelectPlaylistCached  =  createSelector(
    [PlaylistSelector],
    (PlaylistSlice) => {
        return PlaylistSlice['cachedPlaylists']
    }
)


export const SelectPlaylistImage = createSelector(
    [PlaylistSelector],
    (PlaylistSlice) => {
        try {
            return PlaylistSlice['currentPlaylist']['PlaylistMetaData']['images'][0][0]['url'];
        } catch (error) {
            return null;
        }
        
    }
)

export const SelectPlaylistTitle = createSelector(
    [PlaylistSelector],
    (PlaylistSlice) => {
        try {
            return PlaylistSlice['currentPlaylist']['PlaylistMetaData']['name'];
        } catch (error) {
            return null;
        }
    }
)

export const SelectPlaylistTracks = createSelector(
    [PlaylistSelector],
    (PlaylistSlice) => {
        try {
            return PlaylistSlice['currentPlaylist']['PlaylistTracks']['contents']['items'];
        } catch (error) {
            return [];
        }
    }
)