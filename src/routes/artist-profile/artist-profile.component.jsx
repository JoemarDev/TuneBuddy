import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetArtistProfileAsync, GetArtistProfileSuccess } from '../../store/artists-profile/artists-profile.action';
import { 
    SelectArtistCachedProfile,
    SelectIsArtistProfileLoading 
} from '../../store/artists-profile/artists-profile.selector';

import './artist-profile.styles.scss';
import { useParams } from 'react-router-dom';

import ArtistsTopTracks from '../../components/artists-top-tracks/artists-top-tracks';
import ArtistsProfileBanner from '../../components/artists-profile-banner/artists-profile-banner.component';
import AppLoader from '../../components/app-loader/app-loader.component';
import ArtistsProfileBannerPlaceholder from '../../components/artists-profile-banner/artists-profile-banner-placeholder.placeholder';
import ArtistsTopTracksPlaceHolder from '../../components/artists-top-tracks/artists-top-tracks-placeholder.place-holder';


const ArtistProfile = () => {
    
    const CachedArtistsProfile = useSelector(SelectArtistCachedProfile);
    
    const {artist_id} = useParams();
    
    const dispatch = useDispatch();

    useEffect(() => {
        if(!artist_id) return;

        const GetArtistProfile = async() => {
            const CheckedArtists = CachedArtistsProfile.filter((i) => i.id === artist_id);

            if(CheckedArtists.length > 0) return dispatch(GetArtistProfileSuccess(CheckedArtists[0]));
    
            dispatch(GetArtistProfileAsync(artist_id));
        }

        GetArtistProfile();
       
    },[artist_id]);

    const isLoading = useSelector(SelectIsArtistProfileLoading);

    return (
            <div className='artist-container relative'> 
                {isLoading && <ArtistsProfileBannerPlaceholder />}
                {!isLoading && <ArtistsProfileBanner />}

                {isLoading && <ArtistsTopTracksPlaceHolder />}
                {!isLoading && <ArtistsTopTracks />}
            </div>
    )
}

export default ArtistProfile;