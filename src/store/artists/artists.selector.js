import { createSelector } from "reselect";

const selectArtistsReducer = (state) => state.ArtistsData;

export const SelectIsArtistsLoading = createSelector(
   [selectArtistsReducer],
   (ArtistsData) => ArtistsData.isLoading 
)  

export const SelectArtists = createSelector(
    [selectArtistsReducer],
    (ArtistsData) => ArtistsData.artists
)

export const SelectArtistsDataDetail = createSelector(
    [selectArtistsReducer],
    (ArtistsData) => {
        const {title , description , date} = ArtistsData;
        return {title,description,date}
    }
)

export const SelectArtistsLists = createSelector(
    [selectArtistsReducer],
    (ArtistsData) => ArtistsData.artists
)

export const SeletArtistsPreview = createSelector(
    [selectArtistsReducer],
    (ArtistsData) => ArtistsData.artists.slice(0,5)
)