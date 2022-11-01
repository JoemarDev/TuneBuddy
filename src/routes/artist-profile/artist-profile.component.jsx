import { useEffect , useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetArtistProfileAsync, GetArtistProfileSuccess } from '../../store/artists-profile/artists-profile.action';
import { 
    SelectArtistCachedProfile,
    SelectArtistsDiscoveredOn,
    SelectIsArtistProfileLoading 
} from '../../store/artists-profile/artists-profile.selector';

import './artist-profile.styles.scss';
import { useParams } from 'react-router-dom';

import ArtistsTopTracks from '../../components/artists-top-tracks/artists-top-tracks';
import ArtistsProfileBanner from '../../components/artists-profile-banner/artists-profile-banner.component';
import ArtistsProfileBannerPlaceholder from '../../components/artists-profile-banner/artists-profile-banner-placeholder.placeholder';
import ArtistsTopTracksPlaceHolder from '../../components/artists-top-tracks/artists-top-tracks-placeholder.place-holder';
import ArtistsDiscography from '../../components/artists-discography/artists-discography.component';
import ArtistsFeaturing from '../../components/artists-featuring/artists-featuring.component';
import ArtistsRelated from '../../components/artists-related/artists-related.component';
import ArtistsAppearOn from '../../components/artists-appear-on/artists-appear-on.component';
import ArtistsPlaylists from '../../components/artists-playlists/artists-playlists.component';
import ArtistsDiscoveredOn from '../../components/artists-discovered-on/artists-discovered-on.ccomponent';


const ArtistProfile = () => {
    
    const ContainerRef = useRef();

    const CachedArtistsProfile = useSelector(SelectArtistCachedProfile);
    
    const {artist_id} = useParams();
    
    const dispatch = useDispatch();

    useEffect(() => {

        
        if(!artist_id) return;

        ContainerRef.current.scrollIntoView()

        const GetArtistProfile = async() => {
            const CheckedArtists = CachedArtistsProfile.filter((i) => i.id === artist_id);

            if(CheckedArtists.length > 0) return dispatch(GetArtistProfileSuccess(CheckedArtists[0]));
    
            dispatch(GetArtistProfileAsync(artist_id));
        }

        GetArtistProfile();
       
    },[artist_id]);

   

    const isLoading = useSelector(SelectIsArtistProfileLoading);

    return (
            <div className='artist-container relative' ref={ContainerRef}> 
                {isLoading && <ArtistsProfileBannerPlaceholder />}
                {isLoading && <ArtistsTopTracksPlaceHolder />}

                {!isLoading && <ArtistsProfileBanner />}
                {!isLoading && <ArtistsTopTracks />}
                {!isLoading && <ArtistsDiscography />}
                {!isLoading && <ArtistsFeaturing /> }
                {!isLoading && <ArtistsRelated /> }
                {!isLoading && <ArtistsAppearOn /> }
                {!isLoading && <ArtistsPlaylists /> }
                {!isLoading && <ArtistsDiscoveredOn />}
            </div>
    )
}

export default ArtistProfile;