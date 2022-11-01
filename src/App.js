import { Route, Routes } from "react-router-dom";
import Album from "./routes/album/album.component";
import ArtistProfile from "./routes/artist-profile/artist-profile.component";
import ArtistsLists from "./routes/artists-lists/artists-lists.component";
import Home from "./routes/home/home";
import Playlist from "./routes/playlist/playlist.component";
import AppSideBar from "./routes/sidebar/app-sidebar.component";
import Track from "./routes/track/track.component";

const App = () => {
	return (
		<>	
			<Routes>
				<Route path="/" element={<AppSideBar/>}>
					<Route index element={<Home/>}/>
					<Route path={'/artists/*'} element={<ArtistsLists/>}/>
					<Route path={'/artists/:artist_id'} element={<ArtistProfile />}/>
					<Route path={'/album/:album_id'} element={<Album />}/>
					<Route path={'/track/:track_id'} element={<Track />}/>
					<Route path={'/playlist/:playlists_id'} element={<Playlist />}/>
				</Route>
			</Routes>
		</>
	)
}

export default App;
