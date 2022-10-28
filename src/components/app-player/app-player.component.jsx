import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SelectIsFetchingTrackLoading, SelectSongArtist, SelectSongImage, SelectSongName , SelectTrackAudio } from '../../store/songs/songs.selector';
import './app-player.styles.scss';
const AppPlayer = () => {
    
    const [musicTrackState , setMusicTrackState] = useState(null);
    const SongName = useSelector(SelectSongName);

    const Track = useSelector(SelectTrackAudio);
    const isFetchingTrack = useSelector(SelectIsFetchingTrackLoading)
    const SongImage = useSelector(SelectSongImage);
    const SongArtist = useSelector(SelectSongArtist);

    const PlayMusic = () => {

        if(!Track) return;
        if(musicTrackState !== null) musicTrackState.pause();
        const MusicTrack = new Audio(Track);
        MusicTrack.addEventListener('loadeddata', () => MusicTrack.duration);
        MusicTrack.play();
        setMusicTrackState(MusicTrack);
    }

    useEffect(() => {
        if(musicTrackState) {
            musicTrackState.pause();
        }
        PlayMusic();
    },[Track]);

    useEffect(() => {
        if(!isFetchingTrack) return; 

        if(musicTrackState) {
            musicTrackState.pause();
        }

    },[isFetchingTrack]);


    return (
        <div className='app-player px-10 flex  items-center'>
            <div className='track-details text-white flex items-center w-1/4'>
                <img className='track-image w-16 mr-5' src={SongImage} alt={SongName} />
                <div className='track-info'>
                    <label className='block text-lg font-bold'>{SongName} </label>
                    <label className='block font-light text-sm'>{SongArtist['name']}</label>
                </div>
            </div>
            <div className='track-details text-white flex items-center'>
                <img className='track-image w-16 mr-5' src={SongImage} alt={SongName} />
                <div className='track-info'>
                    <label className='block text-lg font-bold'>{SongName} </label>
                    <label className='block font-light text-sm'>{SongArtist['name']}</label>
                </div>
            </div>
        
            <button className='p-3 bg-slate-50' onClick={PlayMusic}>PLAY</button>
        </div>
    )
}

export default AppPlayer;