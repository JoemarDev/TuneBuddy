import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SelectIsPlayerHaveError } from '../../store/player/player.selector';
import {  CurrentTrackArtistsID, SelectSongImage, SelectSongName  } from '../../store/songs/songs.selector';
import AppPlayerControl from '../app-player-control/app-player-control.component';
import AppPlayerError from '../app-player-error/app-player-error.component';
import './app-player.styles.scss';
const AppPlayer = () => {
    

    const SongName = useSelector(SelectSongName);
    const SongImage = useSelector(SelectSongImage);
    const IsPlayerError = useSelector(SelectIsPlayerHaveError);

    const CurrentAritstsLists = useSelector(CurrentTrackArtistsID);

    const navigate = useNavigate();

    const goToArtistsProfile = (artist_id) => navigate(`/artists/${artist_id}`);
    return (
        <div className='app-player px-10 flex  items-center'>
            {IsPlayerError && <AppPlayerError />}
            
            <div className='track-details text-white flex items-center w-1/4'>
                <img className='track-image w-16 mr-5' src={SongImage} alt={SongName} />
                <div className='track-info'>
                    <label className='block text-lg font-bold'>{SongName} </label>
                    <div className='flex'>
                        {CurrentAritstsLists.map((item,index) => (
                            <label className='block font-light text-sm hover:underline cursor-pointer' onClick={() => goToArtistsProfile(item.id)}>
                                {index !== 0 ? ',' : ''} {item.name} 
                            </label>
                        ))}
                    </div>
                    
                </div>
            </div>
            <AppPlayerControl />
        </div>
    )
}

export default AppPlayer;