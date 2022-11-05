import { API_OPTIONS } from "../others/api.options";


import HOMEDATAJSON from '../JSON/Home.json';
import TopArtist from '../JSON/TopArtist.json';
import Artists from '../JSON/Artist.json';
import Song from '../JSON/Song.json';

let counter = 0;

export const GetHomeAPI =  async () => {
	// return HOMEDATAJSON;
    return await fetch('https://spotify-scraper.p.rapidapi.com/v1/home?region=PH', API_OPTIONS)
	.then(response => response.json())
	.then(response => response)
	.catch(err =>  err);
}

export const GetHomeGenres = async () => {
	return HOMEDATAJSON['genres'][0];
}

export const GetTopArtists = async () => {
	// return TopArtist;
	return await fetch('https://spotify-scraper.p.rapidapi.com/v1/chart/artists/top?region=PH', API_OPTIONS)
	.then(response => response.json())
	.then(response => response)
	.catch(err =>  err);
}

export const GetArtistsProfileData = async(artist_id) => {
	// return Artists;
	return await fetch(`https://spotify-scraper.p.rapidapi.com/v1/artist/overview?artistId=${artist_id}`, API_OPTIONS)
	.then(response => response.json())
	.then(response => response)
	.catch(err =>  err);
}

export const GetSongData = async(song_id) => {
	return song_id; 
}

export const DownloadTrack = async(trackID) => {
	// let len = Song.length - 1;
	// let song = Song[counter];
	// if(counter >= len) {
	// 	counter = 0;
	// } else {
	// 	counter++;
	// }
	// return song;

	return await fetch(`https://spotify-scraper.p.rapidapi.com/v1/track/download?track=${trackID}`, API_OPTIONS)
	.then(response => response.json())
	.then(response => response)
	.catch(err =>  err);
}

export const GetAlbumMetaData = async(album_id) =>{

	return  fetch(`https://spotify-scraper.p.rapidapi.com/v1/album/metadata?albumId=${album_id}`, API_OPTIONS)
	.then(response => response.json())
	.then(response => response)
	.catch(err =>  err);
}


export const GetAlbumTracksData = async(album_id) =>{

	return  fetch(`https://spotify-scraper.p.rapidapi.com/v1/album/tracks?albumId=${album_id}`, API_OPTIONS)
	.then(response => response.json())
	.then(response => response)
	.catch(err =>  err);
}


export const GetPlaylistMetaData = async(playlist_id) => {
	return  fetch(`https://spotify-scraper.p.rapidapi.com/v1/playlist/metadata?playlistId=${playlist_id}`, API_OPTIONS)
	.then(response => response.json())
	.then(response => response)
	.catch(err =>  err);
}


export const GetPlaylistTracksData = async(playlist_id) => {
	return  fetch(`https://spotify-scraper.p.rapidapi.com/v1/playlist/contents?playlistId=${playlist_id}`, API_OPTIONS)
	.then(response => response.json())
	.then(response => response)
	.catch(err =>  err);
}

export const GetTracksMetaData = async(track_id) => {
	return  fetch(`https://spotify-scraper.p.rapidapi.com/v1/track/metadata?trackId=${track_id}`, API_OPTIONS)
	.then(response => response.json())
	.then(response => response)
	.catch(err =>  err);
}

export const GetTracksLyrics = async(track_id) => {
	return  fetch(`https://spotify-scraper.p.rapidapi.com/v1/track/lyrics?trackId=${track_id}`, API_OPTIONS)
	.then(response => response.json())
	.then(response => response)
	.catch(err =>  err);
}

export const GetGenreMetaData = async(genre_id) => {
	return  fetch(`https://spotify-scraper.p.rapidapi.com/v1/genre/contents?genreId=${genre_id}`, API_OPTIONS)
	.then(response => response.json())
	.then(response => response)
	.catch(err =>  err);
}

export const GetSearchMetaData = async(word) => {
	return  fetch(`https://spotify-scraper.p.rapidapi.com/v1/search?term=${word}&type=all`, API_OPTIONS)
	.then(response => response.json())
	.then(response => response)
	.catch(err =>  err);
}

export const BrowseNextTracksQueue = async(artists_id) => {
	return  fetch(`https://spotify-scraper.p.rapidapi.com/v1/artist/playlists?artistId=${artists_id}&type=featuring`, API_OPTIONS)
	.then(response => response.json())
	.then(response => {
		const getNextTrackLists = async() => {
			let NextTracks = response['playlists']['items'][0]['id'];
			let TracksLists =  await GetPlaylistTracksData(NextTracks);
			return TracksLists['contents']['items'];
		}
		
		return getNextTrackLists();
	})
	.catch(err =>  err);
}