import { createSelector } from "reselect";

export const SelectAlbumData = (state) => state.Album;


export const SelectIsAlbumLoading = createSelector(
    [SelectAlbumData],
    (AlbumSlice) => AlbumSlice.isLoading 
)

export const SelectAlbumsCached = createSelector(
    [SelectAlbumData],
    (AlbumSlice) => AlbumSlice.cachedAlbums 
)

export const SelectAlbumTitle = createSelector(
    [SelectAlbumData],
    (AlbumSlice) => {
        try {
            return  AlbumSlice['currentAlbum']['AlbumMetaData']['name'];
        } catch (error) {
            return null;
        }
    }
)

export const SelectAlbumImage = createSelector(
    [SelectAlbumData],
    (AlbumSlice) => {

        try {
            return AlbumSlice['currentAlbum']['AlbumMetaData']['cover'][0]['url'];
        } catch (error) {
            return null;
        }
    }
)


 export const SelectAlbumArtist  = createSelector(
    [SelectAlbumData],
    (AlbumSlice) => {

        try {
            return AlbumSlice['currentAlbum']['AlbumMetaData']['artists'][0]['name'];
        } catch (error) {
            return null;
        }
    }
 )

 export const SelectAlbumArtistImage = createSelector(
    [SelectAlbumData],
    (AlbumSlice) => {

        try {
            return AlbumSlice['currentAlbum']['AlbumMetaData']['artists'][0]['visuals']['avatar'][0]['url'];
        } catch (error) {
            return process.env.PUBLIC_URL+'/images/black.webp';
        }
    }
 )


 export const SelectAlbumTracksLength = createSelector(
    [SelectAlbumData],
    (AlbumSlice) => {

        try {
            return AlbumSlice['currentAlbum']['AlbumTracks']['tracks']['totalCount'];
        } catch (error) {
            return null;
        }
    }
 )