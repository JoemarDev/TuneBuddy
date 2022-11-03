import { useSelector } from "react-redux";
import DisplayTrack from "../../components/display-tracks/display-tracks.component";
import { SelectQueueDetails, SelectSongDefaultImage } from "../../store/songs/songs.selector";

const Queue = () => {

    const {activeQueue , tracksQueue} = useSelector(SelectQueueDetails);

    const UpNextTrack = tracksQueue.filter((i,x) => x > activeQueue);

    const GetSongDefaultImage = useSelector(SelectSongDefaultImage);

    console.log(GetSongDefaultImage)
    return (
        <div className={`px-10 py-10 discography-wrapper mb-10`}>
            <h3 className="text-3xl font-bold mb-10">Queue</h3>

            <div className="now-playing-block mb-10">
                <label className="font-bold">Now Playing</label>
            </div>
            
            <DisplayTrack tracks={[tracksQueue[activeQueue]]} cc={'px-0'} defaultImage={GetSongDefaultImage}/> 

            <div className="now-playing-block mb-10">
                <label className="font-bold">Up Next</label>
            </div>

            <DisplayTrack tracks={UpNextTrack} tracksType={'queue'} cc={'px-0'} defaultImage={GetSongDefaultImage}/> 
            
        </div>
    )
}

export default Queue;