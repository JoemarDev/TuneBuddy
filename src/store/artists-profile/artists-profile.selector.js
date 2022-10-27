import { createSelector } from "reselect";

const selectArtistsProfile = (state) => state.ArtistProfile;

export const SelectIsArtistProfileLoading = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => artistsProfileSlice.isLoading
)

export const SelectArtistProfile = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => artistsProfileSlice.currentArtist
);

export const SelectArtistsVisualsHeader = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => {

        if(artistsProfileSlice.currentArtist.status)  
            return artistsProfileSlice['currentArtist']['visuals']['header'][0];
        return null;
    }

)