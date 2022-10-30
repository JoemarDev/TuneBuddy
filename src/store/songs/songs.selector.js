import { createSelector } from "reselect";

const selectSongReducer = (state) => state.Song;

export const SelectSongData = createSelector(
    [selectSongReducer],
    (SongSplice) => {
        return SongSplice['currentSong'];
    }
)



export const SelectSongName = createSelector(
    [selectSongReducer],
    (SongSplice) => {
        try {
            return SongSplice['currentSong']['name'];
        } catch (error) {
            return null;
        }
    }
)

export const SelectSongImage = createSelector(
    [selectSongReducer],
    (SongSplice) => {
        try {
            return SongSplice['currentSong']['album']['cover'][0]['url'];    
        } catch (error) {
            return null;
        }
    }
)

export const SelectSongArtist = createSelector(
    [selectSongReducer],
    (SongSplice) => {
        try {
            return SongSplice['currentSong']['artists'][0];    
        } catch (error) {
            return [];
        }
    }
)

export const SelectSongID = createSelector(
    [selectSongReducer],
    (SongSplice) => {
        try {
            return SongSplice['currentSong']['id'];
        } catch (error) {
            return null;
        }
    }
)

export const SelectIsFetchingTrackLoading = createSelector(
    [selectSongReducer],
    (SongSplice) => SongSplice.trackLoading
)


export const SelectTrackAudio = createSelector(
    [selectSongReducer],
    (SongSplice) => {
        try {
            return SongSplice['trackDetail']['youtubeVideo']['audio'][0]['url'];
        } catch (error) {
            return null;
        }
    }
)

export const SelectTrackDuration = createSelector(
    [selectSongReducer],
    (SongSplice) => {
        try {
            return SongSplice['trackDetail']['youtubeVideo']['audio'][0]['durationMs'];
        } catch (error) {
            return null;
        }
    }
)

export const SelectQueueDetails = createSelector(
    [selectSongReducer],
    (SongSplice) => {
        return {'tracksQueue' : SongSplice['TracksQueue'] , 'activeQueue' : SongSplice['CurrentActiveQueue']};

    }
)


