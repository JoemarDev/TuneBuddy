import { Route, Routes } from "react-router-dom";
import ArtistProfile from "./routes/artist-profile/artist-profile.component";
import ArtistsLists from "./routes/artists-lists/artists-lists.component";
import Home from "./routes/home/home";
import AppSideBar from "./routes/sidebar/app-sidebar.component";

const App = () => {
	return (
		<>	
			<Routes>
				<Route path="/" element={<AppSideBar/>}>
					<Route index element={<Home/>}/>
					<Route path={'/artists/*'} element={<ArtistsLists/>}/>
					<Route path={'/artists/:artist_id'} element={<ArtistProfile />}/>
				</Route>
			</Routes>
		</>
	)
}

export default App;
