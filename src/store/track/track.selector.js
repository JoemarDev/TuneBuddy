import { createSelector } from "reselect";

const TrackSelector = (state) => state.Track;

export const SelectTrackInfoIsLoading = createSelector(
    [TrackSelector],
    (trackSplice) => trackSplice.isLoading
)

export const SelectTracksCached = createSelector(
    [TrackSelector],
    (trackSplice) => trackSplice.cachedTracks
)

export const SelectTrackImage = createSelector(
    [TrackSelector],
    (trackSplice) =>  {
        try {
            return trackSplice['currentTrack']['album']['cover'][0]['url'];
        } catch (error) {
            return null;
        }
    }
)

export const SelectTrackTitle = createSelector(
    [TrackSelector],
    (trackSplice) =>  {
        try {
            return trackSplice['currentTrack']['name'];
        } catch (error) {
            return null;
        }
    }
)

export const SelectTrackArtists = createSelector(
    [TrackSelector],
    (trackSplice) =>  {
        try {
            return trackSplice['currentTrack']['artists'][0]['name'];
        } catch (error) {
            return null;
        }
    }
)

export const SelectTrackArtistImage = createSelector(
    [TrackSelector],
    (trackSplice) =>  {
        try {
            return trackSplice['currentTrack']['artists'][0]['visuals']['avatar'][0]['url'];
        } catch (error) {
            return   process.env.PUBLIC_URL+'/images/black.webp';
        }
    }
)


