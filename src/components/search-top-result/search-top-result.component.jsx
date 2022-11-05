import { useDispatch, useSelector } from "react-redux";
import { PlayPlayerTrack, SetPlayerLastPosition } from "../../store/player/player.action";
import { selectSearchTopResulArtists, selectSearchTopResult, selectSearchTopResultImage, selectSearchTopResultName } from "../../store/search/search.selector";
import { SelectCachedSongs } from "../../store/songs-temp/songs-temp.selector";
import { fetchTrackAsync, fetchTrackDetailSuccess, SetCurrentActiveQueue, SetCurrentSong, SetQueueLists } from "../../store/songs/songs.action";

const SearchTopResult = () => {

    const dispatch = useDispatch();

    const TopResultName = useSelector(selectSearchTopResultName);
    const TopResultImage = useSelector(selectSearchTopResultImage);
    const TopResultArtists = useSelector(selectSearchTopResulArtists);
    const CachedSongs = useSelector(SelectCachedSongs);

    const TopResult = useSelector(selectSearchTopResult);


    const SetSong = () => {
        
        dispatch(PlayPlayerTrack());
        dispatch(SetQueueLists([TopResult]));
        dispatch(SetCurrentActiveQueue(0));
        dispatch(SetCurrentSong(TopResult));
        dispatch(SetPlayerLastPosition(0));
        const CheckedSongs = CachedSongs.filter((i) => i.trackID === TopResult.id); 
        if(CheckedSongs.length > 0) return dispatch(fetchTrackDetailSuccess(CheckedSongs[0]));
        dispatch(fetchTrackAsync(TopResult.id));
    }


    return (
        <div className="top-results  w-1/4 px-2 cursor-pointer" onClick={SetSong}>
            <h2 className="text-xl font-bold mb-5">Top Result</h2>
            <div className="p-5 bg-zinc-900 rounded-lg">
                <img className="w-36 mb-5" src={TopResultImage} alt="" />
                <h3 className="text-2xl font-bold mb-2">{TopResultName}</h3>
                <div className="flex items-center">
                    {TopResultArtists.map((item,index) => (
                        <label className="mr-5 text-slate-500">{item.name}</label>
                    ))}
                    <label className="p-2 py-1 bg-stone-800 rounded-lg text-sm">Song</label>
                </div>
            </div>
        </div>
    )
}

export default SearchTopResult;