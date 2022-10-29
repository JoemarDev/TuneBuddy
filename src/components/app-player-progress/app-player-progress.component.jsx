import { Fragment, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PausePlayerTrack, PlayPlayerTrack, SetPlayerLastPosition } from "../../store/player/player.action";
import { SelectIsPlayerOnLoop } from "../../store/player/player.selector";
import { SelectTrackDuration } from "../../store/songs/songs.selector";
import { ConvertMilliSecond , ConvertMsToReadableFormat, ConvertTrackDurationToRedableFormat } from "../../utils/basic/basic.utils";
import './app-player-progress.styles.scss'
const AppPlayerProgress = ({track}) => {

    const trackDuration = useSelector(SelectTrackDuration);
    const PlayerIsLoop = useSelector(SelectIsPlayerOnLoop);

    const [percentage , setPercetage] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        if(track == null) return;
        let TrackDuration = ConvertMilliSecond(trackDuration);

        track.addEventListener('timeupdate' , (e) => {
            let percent = (track.currentTime  * 100) / TrackDuration
            setPercetage(percent);
        });

        track.addEventListener('ended' , (e) => {
            if(PlayerIsLoop) {
                track.currentTime = 0;
                track.play();
                return dispatch(SetPlayerLastPosition(0));
            }
        
            dispatch(PausePlayerTrack());
            dispatch(SetPlayerLastPosition(0));
        });

    },[track]);

    const TrackProgressPositionUpdate = (e) => {
        let {value} = e.target;
        setPercetage(value);
        
        let TrackDuration = ConvertMilliSecond(trackDuration);
        let newPosition = TrackDuration * value /  100;
        dispatch(SetPlayerLastPosition(newPosition));

        track.pause();
        track.currentTime = newPosition;
        
        
            
    }
    
    const ResumeTrackPlayer = () => {
        track.play()
        dispatch(PlayPlayerTrack());
    }

    return (
        <Fragment>
            <label className="text-gray-200 mr-5 text-sm">
                {ConvertTrackDurationToRedableFormat(track?.currentTime)}
            </label>
            <div className="track-progress-bar-wrapper w-1/3">
                <input
                    onChange={TrackProgressPositionUpdate}
                    onMouseUp={ResumeTrackPlayer}
                    onTouchEnd={ResumeTrackPlayer}
                    style={{ 
                        'background': `linear-gradient(to right, #fff 0%, #fff ${percentage}%, #333 ${percentage}%, #333 100%)`
                    }}
                    className="track-progress-bar " 
                    type="range" min="0" 
                    value={percentage} max="100"
                />
            </div>
            <label className="text-gray-200 ml-5 text-sm">
                {ConvertMsToReadableFormat(trackDuration)}
            </label>
        </Fragment>
    )
}

export default AppPlayerProgress;