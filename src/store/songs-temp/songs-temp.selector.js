import { createSelector } from "reselect";

const selectTempSongReducer = (state) => state.TempSong;


export const SelectCachedSongs = createSelector(
    [selectTempSongReducer],
    (TempSongSplice) => {
        console.log(TempSongSplice['cachedSongs'])
        return TempSongSplice['cachedSongs']
    }
)