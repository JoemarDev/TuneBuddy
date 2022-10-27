import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetArtistProfileAsync } from '../../store/artists-profile/artists-profile.action';
import { SelectArtistProfile, SelectArtistsVisualsHeader, SelectIsArtistProfileLoading } from '../../store/artists-profile/artists-profile.selector';
import './artist-profile.styles.scss';
import { useParams } from 'react-router-dom';
import AppLoader from '../../components/app-loader/app-loader.component';
import { SelectIsArtistsLoading } from '../../store/artists/artists.selector';
const ArtistProfile = () => {
    
    const {artist_id} = useParams();
    
    const dispatch = useDispatch();

    useEffect(() => {
        if(!artist_id) return;
        dispatch(GetArtistProfileAsync(artist_id))
    },[artist_id]);

    // const ArtistsProfile = useSelector(SelectArtistProfile);
    const AristsVisualHeaders = useSelector(SelectArtistsVisualsHeader);
    const isLoading = useSelector(SelectIsArtistProfileLoading);

    return (
        <>
            <div className='artist-container p-16'>
                    
                    
                
                {isLoading && <AppLoader className="w-full h-96" /> }
                {(AristsVisualHeaders && !isLoading) && <img className='w-full h-96 object-cover' src={AristsVisualHeaders['url']}/>}
            </div>
        </>
    )
}

export default ArtistProfile;