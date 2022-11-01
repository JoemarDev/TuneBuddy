import { combineReducers } from "redux";
import { ArtistsProfileReducer } from "./artists-profile/artists-profile.reducer";
import { ArtistsReducer } from "./artists/artists.reducer";
import { PlayerReducer } from "./player/player.reducer";
import { SongsReducer } from "./songs/songs.reducer";
import { SongsTempReducer } from "./songs-temp/songs-temp.reducer";
import { AlbumReducer } from "./album/album.reducer";
import { PlaylistReducer } from "./playlist/playlist.reducer";
import { TrackReducer } from "./track/track.reducer";

export const rootReducer = combineReducers({
    ArtistsData : ArtistsReducer,
    ArtistProfile : ArtistsProfileReducer,
    Song : SongsReducer,
    Player : PlayerReducer,
    TempSong :SongsTempReducer,
    Album : AlbumReducer,
    Playlist : PlaylistReducer,
    Track : TrackReducer,
});