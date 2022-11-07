import { selectSearchTrackResults } from "../../store/search/search.selector";
import Tracks from "../tracks/tracks.component"
import { useDispatch, useSelector } from "react-redux";
import { PlayPlayerTrack, SetPlayerLastPosition } from "../../store/player/player.action";
import { SelectCachedSongs } from "../../store/songs-temp/songs-temp.selector";
import { fetchTrackAsync, fetchTrackDetailSuccess, SetCurrentActiveQueue, SetCurrentSong, SetQueueLists } from "../../store/songs/songs.action";

const SearchTrackLists = () => {

    const dispatch = useDispatch();

    const SearchTracksLists = useSelector(selectSearchTrackResults);
    const CachedSongs = useSelector(SelectCachedSongs);


    const SetSong = (track) => {
        
        dispatch(PlayPlayerTrack());
        dispatch(SetQueueLists([track]));
        dispatch(SetCurrentActiveQueue(0));
        dispatch(SetCurrentSong(track));
        dispatch(SetPlayerLastPosition(0));
        const CheckedSongs = CachedSongs.filter((i) => i.trackID === track.id); 
        if(CheckedSongs.length > 0) return dispatch(fetchTrackDetailSuccess(CheckedSongs[0]));
        dispatch(fetchTrackAsync(track.id));
    }


    return (
        <>
         <div className="song-results w-3/4 px-2 max-lg:w-full">
            <h2 className="text-xl font-bold mb-5">Songs</h2>
            {SearchTracksLists.map((item, index) => (
                <Tracks 
                    track={item} 
                    key={index} 
                    setSong={() => SetSong(item)} 
                    trackNo={index + 1} 
                    isArtist={false}/>
            ))}
        </div>
        
        </>
    )
}

export default SearchTrackLists;