import { useDispatch, useSelector } from "react-redux";
import { PlayPlayerTrack, SetPlayerLastPosition } from "../../store/player/player.action";
import { SelectCachedSongs } from "../../store/songs-temp/songs-temp.selector";
import { 
    fetchTrackAsync, 
    fetchTrackDetailSuccess, 
    SetCurrentActiveQueue, 
    SetCurrentSong, 
    SetQueueLists,
    SetSongDefaultImage
 } from "../../store/songs/songs.action";
import Tracks from "../tracks/tracks.component";

const DisplayTrack = ({tracks , defaultImage , tracksType , cc}) => {

    const dispatch = useDispatch();

    const CachedSongs = useSelector(SelectCachedSongs);

    const SetSong = (index) => {
        const song = tracks[index];
        try {
            dispatch(PlayPlayerTrack());
            dispatch(SetQueueLists(tracks));
            dispatch(SetCurrentActiveQueue(index));
            dispatch(SetCurrentSong(song));
            dispatch(SetPlayerLastPosition(0));
            const CheckedSongs = CachedSongs.filter((i) => i.trackID === song.id); 
            if(CheckedSongs.length > 0) return dispatch(fetchTrackDetailSuccess(CheckedSongs[0]));
            dispatch(fetchTrackAsync(song.id));
            dispatch(SetSongDefaultImage(defaultImage));
        } catch (error) {
            console.log(error);
        }
       
    }


    return (
        <div className={`w-full px-16 max-lg:p-5 max-lg:pt-0 ${cc}`}>
            {tracks.map((item,index) => (
                <Tracks key={index} trackNo={(tracksType == 'queue' ? (index + 1) : index) + 1} track={item}  setSong={() => SetSong(index)} tracksType={tracksType}/>
            ))}
        </div>

    )
}

export default DisplayTrack;