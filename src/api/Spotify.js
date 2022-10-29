import { API_OPTIONS } from "../others/api.options";


import HOMEDATAJSON from '../JSON/Home.json';
import TopArtist from '../JSON/TopArtist.json';
import Artists from '../JSON/Artist.json';
import Song from '../JSON/Song.json';

let counter = 0;
export const GetHomeAPI =  async () => {
	return HOMEDATAJSON;
    // return await fetch('https://spotify-scraper.p.rapidapi.com/v1/home', API_OPTIONS)
	// .then(response => response.json())
	// .then(response => response)
	// .catch(err => console.error(err));
}

export const GetHomeGenres = async () => {
	return HOMEDATAJSON['genres'][0];
}

export const GetTopArtists = async () => {
	return TopArtist;
	// return await fetch('https://spotify-scraper.p.rapidapi.com/v1/chart/artists/top?region=PH', API_OPTIONS)
	// .then(response => response.json())
	// .then(response => response)
	// .catch(err => console.error(err));
}

export const GetArtistsProfileData = async(artist_id) => {
	return Artists;
	// return await fetch(`https://spotify-scraper.p.rapidapi.com/v1/artist/overview?artistId=${artist_id}`, API_OPTIONS)
	// .then(response => response.json())
	// .then(response => response)
	// .catch(err => console.error(err));
}

export const GetSongData = async(song_id) => {
	return song_id; 
}

export const DownloadTrack = async(trackID) => {
	let len = Song.length - 1;
	let song = Song[counter];
	if(counter >= len) {
		counter = 0;
	} else {
		counter++;
	}
	return song;

	// return await fetch(`https://spotify-scraper.p.rapidapi.com/v1/track/download?track=${trackID}`, API_OPTIONS)
	// .then(response => response.json())
	// .then(response => response)
	// .catch(err => console.error(err));
}