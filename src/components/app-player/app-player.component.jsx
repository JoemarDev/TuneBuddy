import { useSelector } from 'react-redux';
import {  SelectSongArtist, SelectSongImage, SelectSongName  } from '../../store/songs/songs.selector';
import AppPlayerControl from '../app-player-control/app-player-control.component';
import './app-player.styles.scss';
const AppPlayer = () => {
    

    const SongName = useSelector(SelectSongName);
    const SongImage = useSelector(SelectSongImage);
    const SongArtist = useSelector(SelectSongArtist);


    return (
        <div className='app-player px-10 flex  items-center'>
            <div className='track-details text-white flex items-center w-1/4'>
                <img className='track-image w-16 mr-5' src={SongImage} alt={SongName} />
                <div className='track-info'>
                    <label className='block text-lg font-bold'>{SongName} </label>
                    <label className='block font-light text-sm'>{SongArtist['name']}</label>
                </div>
            </div>

            <AppPlayerControl />
        </div>
    )
}

export default AppPlayer;