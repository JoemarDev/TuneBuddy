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

export const SelectArtistsVisualsBanner = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => {
        try {
            return artistsProfileSlice['currentArtist']['visuals']['header'][0]['url'];
        } catch (error) {
            return null;
        }
            
    }

)

export const SelectArtistsName = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => {
        try {
            const artists = artistsProfileSlice['currentArtist'];
            return artists['name'];
        } catch (error) {
            return null;
        }
    }
)

export const SelectArtistsMontlyListener = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => {
        if(artistsProfileSlice.currentArtist.status)  {
            const artists = artistsProfileSlice['currentArtist'];
            return artists['stats']['monthlyListeners'];
        }
        return null;
    }
)

export const SelectArtistsTopTracks = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => {
        try {
            const artists = artistsProfileSlice['currentArtist'];
            return artists['discography']['topTracks'];
        } catch (error) {
            return [];
        }
    }
)