import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetArtistProfileAsync } from '../../store/artists-profile/artists-profile.action';
import { 
    SelectArtistsMontlyListener, 
    SelectArtistsName, 
    SelectArtistsTopTracks, 
    SelectArtistsVisualsBanner, 
    SelectIsArtistProfileLoading 
} from '../../store/artists-profile/artists-profile.selector';

import './artist-profile.styles.scss';
import { useParams } from 'react-router-dom';
import AppLoader from '../../components/app-loader/app-loader.component';
import { ConvertWithComma } from '../../utils/basic/basic.utils';

import { fetchTrackAsync, SetCurrentSong } from '../../store/songs/songs.action';
const ArtistProfile = () => {
    
    const {artist_id} = useParams();
    
    const dispatch = useDispatch();

    useEffect(() => {
        if(!artist_id) return;
        dispatch(GetArtistProfileAsync(artist_id))
    },[artist_id]);

    const ArtistName = useSelector(SelectArtistsName);
    const ArtistMonthlyListener = useSelector(SelectArtistsMontlyListener);
    const AristVisualBanner = useSelector(SelectArtistsVisualsBanner);
    const ArtistTopTracks = useSelector(SelectArtistsTopTracks);
    const isLoading = useSelector(SelectIsArtistProfileLoading);
    
    const SetSong = (song) => {
        dispatch(SetCurrentSong(song));
        dispatch(fetchTrackAsync(song.id));
    }

    return (
        <>
            <div className='artist-container relative'> 
                {isLoading && <AppLoader className="w-full h-96 absolute left-0" /> }

                {!isLoading &&
                    <div className='relative z-10 py-16 px-10 artist-profile-information mb-10' 
                        style={{
                            background : `linear-gradient(0deg, rgb(0, 0, 0) 10%, rgb(255 255 255 / 21%) 100%),  url(${AristVisualBanner})`
                        }}>
                        <h2 className='text-8xl font-bold mb-5'>{ArtistName}</h2>
                        <p className="text-xl font-bold">{ConvertWithComma(ArtistMonthlyListener) } Monthly Listener</p>
                    </div>
                 }

                <div className='px-10'>
                    <h3 className='text-3xl font-bold' >Top Tracks</h3>
                    <div className='track-lists pl-5'>
                        {ArtistTopTracks.map((item,index) => (
                            <div onClick={() => SetSong(item)} className='track-list' key={index}>{item.name}</div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtistProfile;