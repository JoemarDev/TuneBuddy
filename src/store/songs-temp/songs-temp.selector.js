import { createSelector } from "reselect";

const selectTempSongReducer = (state) => state.TempSong;


export const SelectCachedSongs = createSelector(
    [selectTempSongReducer],
    (TempSongSplice) => {
        return TempSongSplice['cachedSongs']
    }
)