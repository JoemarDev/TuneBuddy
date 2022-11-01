import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DisplayBanner from "../../components/display-banner/display-banner.component";
import DisplayBannerPlaceHolder from "../../components/display-banner/display-banner.placeholder";
import { fetchPlaylistAsync, fetchPlaylistSuccess } from "../../store/playlist/playlist.action";
import { SelectIsPlaylistLoading, SelectPlaylistCached, SelectPlaylistImage, SelectPlaylistTitle } from "../../store/playlist/playlist.selector";

const Playlist = () => {
    const {playlists_id} = useParams();

    const dispatch = useDispatch();

    const PlayListsCached = useSelector(SelectPlaylistCached);

    const PlaylistTitle = useSelector(SelectPlaylistTitle);

    const PlaylistImage = useSelector(SelectPlaylistImage);

    const IsPlaylistLoading = useSelector(SelectIsPlaylistLoading);

    useEffect(() => {
     
        if(!playlists_id)  return;
     
        const GetPlaylistData = async() => {
            
            const CachePlaylist = PlayListsCached.filter((i) => i['PlaylistMetaData']['id'] === playlists_id);
            
            if(CachePlaylist.length > 0) return dispatch(fetchPlaylistSuccess(CachePlaylist[0]));

            dispatch(fetchPlaylistAsync(playlists_id))

        }

        GetPlaylistData();
    },[playlists_id]);




    return (

        <Fragment>
            {IsPlaylistLoading && <DisplayBannerPlaceHolder/>}
            {!IsPlaylistLoading && 
                <DisplayBanner 
                    image={PlaylistImage} 
                    title={PlaylistTitle}
                    type={'PLAYLIST'}/>
            }
        </Fragment>

    )
}

export default Playlist;
