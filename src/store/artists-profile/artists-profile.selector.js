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

export const SelectArtistVisualAvatar = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => {
        try {
            return artistsProfileSlice['currentArtist']['visuals']['avatar'][0]['url'];
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

export const SelectArtistCachedProfile = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => artistsProfileSlice['cachedArtistProfile']
)


export const SelectArtistsBiography = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => {
        try {
            const artists = artistsProfileSlice['currentArtist'];
            return artists['biography'];
        } catch (error) {
            return null;
        }
    }
)


export const SelectArtistsAlbum = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => {
        try {
            const artists = artistsProfileSlice['currentArtist'];
            return artists['discography']['albums']['items'];
        } catch (error) {
            return [];
        }
    }
)


export const SelectArtistsSingles = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => {
        try {
            const artists = artistsProfileSlice['currentArtist'];
            return artists['discography']['singles']['items'];
        } catch (error) {
            return [];
        }
    }
)

export const SelectArtistsCompilations = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => {
        try {
            const artists = artistsProfileSlice['currentArtist'];
            return artists['discography']['compilations']['items'];
        } catch (error) {
            return [];
        }
    }
)

export const SelectArtistsFeaturing = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => {
        try {
            const artists = artistsProfileSlice['currentArtist'];
            return artists['relatedContent']['featuring']['items'];
        } catch (error) {
            return [];
        }
    }
)

export const SelectRelatedArtists = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => {
        try {
            const artists = artistsProfileSlice['currentArtist'];
            return artists['relatedContent']['relatedArtists']['items'];
        } catch (error) {
            return [];
        }
    }
)

export const SelectArtistsAppearOn = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => {
        try {
            const artists = artistsProfileSlice['currentArtist'];
            return artists['relatedContent']['appearsOn']['items'];
        } catch (error) {
            return [];
        }
    }
)

export const SelectArtistsPlaylists = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => {
        try {
            const artists = artistsProfileSlice['currentArtist'];
            return artists['playlists']['items'];
        } catch (error) {
            return [];
        }
    }
)

export const SelectArtistsDiscoveredOn = createSelector(
    [selectArtistsProfile],
    (artistsProfileSlice) => {
        try {
            const artists = artistsProfileSlice['currentArtist'];
            return artists['relatedContent']['discoveredOn']['items'];
        } catch (error) {
            return [];
        }
    }
)