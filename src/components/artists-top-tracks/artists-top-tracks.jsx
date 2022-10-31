import { useDispatch, useSelector } from "react-redux";
import { SelectArtistsTopTracks } from "../../store/artists-profile/artists-profile.selector";
import { fetchTrackAsync, fetchTrackDetailSuccess, SetCurrentActiveQueue, SetCurrentSong, SetQueueLists } from '../../store/songs/songs.action';
import { PlayPlayerTrack, SetPlayerLastPosition } from '../../store/player/player.action';
import Tracks from "../tracks/tracks.component";
import { useState } from "react";
import { SelectCachedSongs } from '../../store/songs-temp/songs-temp.selector';
const ArtistsTopTracks = () => {

    const dispatch = useDispatch();

    const TopTracks = useSelector(SelectArtistsTopTracks);
    const CachedSongs = useSelector(SelectCachedSongs);

    const [showCount , setShowCount] = useState(5);

    const SetSong = (index) => {
        
        const song = TopTracks[index];

        dispatch(PlayPlayerTrack());
        dispatch(SetQueueLists(TopTracks));
        dispatch(SetCurrentActiveQueue(index));
        dispatch(SetCurrentSong(song));
        dispatch(SetPlayerLastPosition(0));
        const CheckedSongs = CachedSongs.filter((i) => i.trackID === song.id); 
        if(CheckedSongs.length > 0) return dispatch(fetchTrackDetailSuccess(CheckedSongs[0]));
        dispatch(fetchTrackAsync(song.id));
    }

    const ToogleShowCount = () => {
        if(showCount == 5) return setShowCount(10);
        setShowCount(5);
    }

    return (
        <div className='px-10 mb-10'>
            <h3 className='text-3xl font-bold' >Popular Tracks</h3>
            <div className='track-lists pt-5'>
                {TopTracks.map((item,index) => {
                    if(showCount <= index) return;
                    return (
                        <Tracks track={item} key={index} setSong={() => SetSong(index)} trackNo={index + 1} isArtist={false}/>
                    )
                })}

                <label onClick={ToogleShowCount}
                    className="py-5 block pl-3 font-bold text-lg text-slate-400 hover:text-slate-50 cursor-pointer">
                    {showCount == 5 ? 'Show More' : 'Show Less'}
                </label>
            </div>
        </div>
    )
}

export default ArtistsTopTracks;
