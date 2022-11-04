import { Route, Routes } from "react-router-dom";
import ArtistsAppearOn from "./components/artists-appear-on/artists-appear-on.component";
import ArtistsDiscography from "./components/artists-discography/artists-discography.component";
import ArtistsDiscoveredOn from "./components/artists-discovered-on/artists-discovered-on.ccomponent";
import ArtistsFeaturing from "./components/artists-featuring/artists-featuring.component";
import ArtistsPlaylists from "./components/artists-playlists/artists-playlists.component";
import ArtistsRelated from "./components/artists-related/artists-related.component";
import Album from "./routes/album/album.component";
import ArtistProfile from "./routes/artist-profile/artist-profile.component";
import ArtistsLists from "./routes/artists-lists/artists-lists.component";
import Genre from "./routes/genre/genre.component";
import Home from "./routes/home/home";
import Playlist from "./routes/playlist/playlist.component";
import Queue from "./routes/queue/queue.component";
import Search from "./routes/search/search.component";
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
					<Route path={'/artists/:artist_id/discography/all'} element={<ArtistsDiscography config={'all'} cc="py-10"/>}/>
					<Route path={'/artists/:artist_id/featuring/all'} element={<ArtistsFeaturing config={'all'} cc="py-10"/>}/>
					<Route path={'/artists/:artist_id/related-artists/all'} element={<ArtistsRelated config={'all'} cc="py-10"/>}/>
					<Route path={'/artists/:artist_id/appears-on/all'} element={<ArtistsAppearOn config={'all'} cc="py-10"/>}/>
					<Route path={'/artists/:artist_id/artist-playlists/all'} element={<ArtistsPlaylists config={'all'} cc="py-10"/>}/>
					<Route path={'/artists/:artist_id/discover-on/all'} element={<ArtistsDiscoveredOn config={'all'} cc="py-10"/>}/>
					<Route path={'/album/:album_id'} element={<Album />}/>
					<Route path={'/track/:track_id'} element={<Track />}/>
					<Route path={'/playlist/:playlists_id'} element={<Playlist />}/>
					<Route path={'/queue'} element={<Queue/>}/>
					<Route path={'/search'} element={<Search/>}/>
					<Route path={'/genre/:genre_id'} element={<Genre/>}/>
				</Route>
			</Routes>
		</>
	)
}

export default App;
