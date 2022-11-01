import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DisplayBanner from "../../components/display-banner/display-banner.component";
import DisplayBannerPlaceHolder from "../../components/display-banner/display-banner.placeholder";
import { fetchAlbumAsync, fetchAlbumSuccess } from "../../store/album/album.action";
import { SelectAlbumArtist, SelectAlbumArtistImage, SelectAlbumImage, SelectAlbumsCached, SelectAlbumTitle, SelectAlbumTracksLength, SelectIsAlbumLoading } from "../../store/album/album.selector";

const Album = () => {
    
    const {album_id} = useParams();

    const AlbumeCachedData = useSelector(SelectAlbumsCached);

    const AlbumImage = useSelector(SelectAlbumImage);

    const AlbumTitle = useSelector(SelectAlbumTitle);

    const AlbumArtist = useSelector(SelectAlbumArtist);

    const AlbumArtistImage = useSelector(SelectAlbumArtistImage);

    const AlbumTracksLength = useSelector(SelectAlbumTracksLength);

    const IsAlbumLoading = useSelector(SelectIsAlbumLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        if(!album_id) return;
        
        const GetAlbumData = async() => {
            const CacheAlbum = AlbumeCachedData.filter((i) => i['AlbumMetaData']['id'] === album_id);

            if(CacheAlbum.length > 0) return dispatch(fetchAlbumSuccess(CacheAlbum[0]));
    
            dispatch(fetchAlbumAsync(album_id));
        }

        GetAlbumData();

      
    },[album_id]);


    return (
        <Fragment>
           {IsAlbumLoading && <DisplayBannerPlaceHolder/>}
            {!IsAlbumLoading && 
                <DisplayBanner 
                    image={AlbumImage} 
                    title={AlbumTitle}
                    type={'ALBUM'}
                    artist_name={AlbumArtist}
                    artist_image={AlbumArtistImage}
                    song_count={AlbumTracksLength}/>
            }
        </Fragment>
    )
}

export default Album;