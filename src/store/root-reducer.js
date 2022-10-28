import { combineReducers } from "redux";
import { ArtistsProfileReducer } from "./artists-profile/artists-profile.reducer";
import { ArtistsReducer } from "./artists/artists.reducer";
import { SongsReducer } from "./songs/songs.reducer";

export const rootReducer = combineReducers({
    ArtistsData : ArtistsReducer,
    ArtistProfile : ArtistsProfileReducer,
    Song : SongsReducer,
});