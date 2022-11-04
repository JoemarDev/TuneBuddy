import { createSelector } from "reselect";

const GenreSelector = (state) => state.Genre;

export const selectIsGenreIsLoading = () => createSelector(
    [GenreSelector],
    (genreSplice) => genreSplice.isLoading
)

export const selectGenreCached = () => createSelector(
    [GenreSelector],
    (genreSplice) => genreSplice.cachedGenre
)

export const selectCurrentGenre = () => createSelector(
    [GenreSelector],
    (genreSplice) => genreSplice.currentGenre
)

export const selectCurrentGenreName = () => createSelector(
    [GenreSelector],
    (genreSplice) => genreSplice.currentGenre['name']
)

export const selectCurrentGenreItems = () => createSelector(
    [GenreSelector],
    (genreSplice) => {
        try {
            return genreSplice['currentGenre']['contents']['items'];
        } catch (error) {
            return [];
        }
    }
)