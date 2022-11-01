import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DisplayBanner from "../../components/display-banner/display-banner.component";
import DisplayBannerPlaceHolder from "../../components/display-banner/display-banner.placeholder";
import { fetchTrackAsync, fetchTrackSuccess } from "../../store/track/track.action";
import { SelectTrackArtistImage, SelectTrackArtists, SelectTrackImage, SelectTrackInfoIsLoading, SelectTracksCached, SelectTrackTitle } from "../../store/track/track.selector";

const Track = () => {

    const {track_id} = useParams();

    const dispatch = useDispatch();

    const TracksCached = useSelector(SelectTracksCached); 

    const IsTrackInfoLoading = useSelector(SelectTrackInfoIsLoading);

    const TrackImage = useSelector(SelectTrackImage);

    const TrackTitle = useSelector(SelectTrackTitle);

    const TrackArtist = useSelector(SelectTrackArtists);
    
    const TrackArtistImage = useSelector(SelectTrackArtistImage);

    useEffect(() => {
        if(!track_id) return;

        const GetTrackInfoData = async() => {
            const CacheTrackLists = TracksCached.filter((i) => i['id'] === track_id);

            if(CacheTrackLists.length > 0) return dispatch(fetchTrackSuccess(CacheTrackLists[0]));
            
            dispatch(fetchTrackAsync(track_id));
        }

        GetTrackInfoData();
    },[track_id]);


    return (

         <Fragment>
            {IsTrackInfoLoading && <DisplayBannerPlaceHolder/>}
            {!IsTrackInfoLoading &&
                <DisplayBanner 
                    image={TrackImage} 
                    title={TrackTitle}
                    type={'TRACK'}
                    artist_name={TrackArtist}
                    artist_image={TrackArtistImage}
                    />
            }
        </Fragment>

    )
}

export default Track;
