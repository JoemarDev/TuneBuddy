import { createSelector } from "reselect";

const SearchSelector = (state) => state.Search;

 
export const selectIsSearchIsLoading = createSelector(
    [SearchSelector],
    (searchSplice) => searchSplice.isLoading
)

export const selectSearchCachedResult = createSelector(
    [SearchSelector],
    (searchSplice) => searchSplice.cachedSearch
)

export const selectCurrentSearch = createSelector(
    [SearchSelector],
    (searchSplice) => searchSplice.currentSearch
    
)

export const selectSearchTopResultName = createSelector(
    [SearchSelector],
    (searchSplice) => {
        try {
            const Result = searchSplice.currentSearch;
            return Result['tracks']['items'][0]['name'];
        } catch (error) {
            return [];
        }
    }
)

export const selectSearchTopResult = createSelector(
    [SearchSelector],
    (searchSplice) => {
        try {
            const Result = searchSplice.currentSearch;
            return Result['tracks']['items'][0];
        } catch (error) {
            return [];
        }
    }
)

export const selectSearchTopResultImage = createSelector(
    [SearchSelector],
    (searchSplice) => {
        try {
            const Result = searchSplice.currentSearch;
            return Result['tracks']['items'][0]['album']['cover'][0]['url'];
        } catch (error) {
            return process.env.PUBLIC_URL+'/images/black.webp';
        }
    }
)

export const selectSearchTopResulArtists = createSelector(
    [SearchSelector],
    (searchSplice) => {
        try {
            const Result = searchSplice.currentSearch;
            return Result['tracks']['items'][0]['artists'];
        } catch (error) {
            return [];
        }
    }
)

export const selectSearchTrackResults = createSelector(
    [SearchSelector],
    (searchSplice) => {
        try {
            const Result = searchSplice.currentSearch;
            return Result['tracks']['items'].splice(0,4);
        } catch (error) {
            return [];
        }
    }
)


export const selectSearchArtistsResult = createSelector(
    [SearchSelector],
    (searchSplice) => {
        try {
            const Result = searchSplice.currentSearch;
            return Result['artists']['items'].splice(0,5);
        } catch (error) {
            return [];
        }
    }
)

export const selectSearchPlaylistsResult = createSelector(
    [SearchSelector],
    (searchSplice) => {
        try {
            const Result = searchSplice.currentSearch;
            return Result['playlists']['items'].splice(0,5);
        } catch (error) {
            return [];
        }
    }
)

export const selectSearchAlbumResult = createSelector(
    [SearchSelector],
    (searchSplice) => {
        try {
            const Result = searchSplice.currentSearch;
            return Result['albums']['items'].splice(0,5);
        } catch (error) {
            return [];
        }
    }
)

