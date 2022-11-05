import { Fragment, useEffect , useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IsPlayerHaveError, PausePlayerTrack , PlayPlayerTrack, SetPlayerLastPosition, SetPlayerOnLoop } from '../../store/player/player.action';
import { SelectIsPlayerOnLoop, SelectLastPlayerPosition, SelectTrackPlayerStatus } from '../../store/player/player.selector';

import { fetchTrackAsync, fetchTrackDetailSuccess, GetNewTracksQueue, SetCurrentActiveQueue, SetCurrentSong, SetFetchSongRetry } from '../../store/songs/songs.action';
import { SelectCachedSongs } from '../../store/songs-temp/songs-temp.selector';
import {SelectIsFetchingTrackLoading, SelectQueueDetails, SelectSongData, SelectSongFetchRetry, SelectTrackAudio  } from '../../store/songs/songs.selector';
import AppPlayerProgress from '../app-player-progress/app-player-progress.component';
import Spinner from '../spinner/spinner.component';
import './app-player-control.styles.scss';
import AppPlayerVolume from '../app-player-volume/app-player-volume.component';
import { useLocation, useNavigate } from 'react-router-dom';

const AppPlayerControl = () => {
    
    const dispatch = useDispatch();

    const [musicTrackState , setMusicTrackState] = useState(null);

    const SongFetchRetry = useSelector(SelectSongFetchRetry);
    const GetCurrentSong = useSelector(SelectSongData);
    const PlayerTrackStatus = useSelector(SelectTrackPlayerStatus)
    const PlayerLastPosition = useSelector(SelectLastPlayerPosition);
    const PlayerIsLoop = useSelector(SelectIsPlayerOnLoop)
    const CachedSongs = useSelector(SelectCachedSongs);
    const Track = useSelector(SelectTrackAudio);

    const {tracksQueue , activeQueue} = useSelector(SelectQueueDetails);
    const isNewTrackLoading = useSelector(SelectIsFetchingTrackLoading);

    const navigate = useNavigate();
    const location = useLocation();

    // Pause the Player if new song has been selected
    useEffect(() => {
        if(isNewTrackLoading)  return musicTrackState.pause();
    },[isNewTrackLoading]);

    // Listen Globally If Pause And Play Dispatch 
    useEffect(() => {
        if(musicTrackState === null) return;
        const PlayerPlayAndPausehandler = () => {
            return PlayerTrackStatus ? musicTrackState.play() : musicTrackState.pause()
        }
        PlayerPlayAndPausehandler();
    },[PlayerTrackStatus]);

    
    // Change the Track in the player if changes
    useEffect(() => {

        if(!Track) return;
        if(musicTrackState !== null) musicTrackState.pause();

        const MusicTrack = new Audio(Track);
        MusicTrack.currentTime = PlayerLastPosition;
        setMusicTrackState(MusicTrack);

        dispatch(IsPlayerHaveError(false));

        if(PlayerTrackStatus === false) return;
        InitPlayer(MusicTrack);

    },[Track]);

    // Save the last position of the song played before closing the app
    window.onbeforeunload = function(e) {
        dispatch(SetPlayerLastPosition(musicTrackState.currentTime));
        return undefined;
    };

    const InitPlayer = (player) => {
        player.play()
        .then(() =>  {
            player.loop = PlayerIsLoop;
            dispatch(PlayPlayerTrack());
            dispatch(IsPlayerHaveError(false));
        }).catch((err) => {
            if(err.code === 9) dispatch(IsPlayerHaveError(true));
            dispatch(PausePlayerTrack())
        });
    }

    const PlayMusic = () => {
      
        musicTrackState.play()
        .then(() => {
            dispatch(PlayPlayerTrack()); 
            dispatch(IsPlayerHaveError(false))
        })
        .catch((err) => {
           
            if(err.code === 9) {
                if(SongFetchRetry === 0) {
                    dispatch(SetFetchSongRetry(1));
                    dispatch(fetchTrackAsync(GetCurrentSong.id));
                    return;
                }

                return dispatch(IsPlayerHaveError(true));
            }
            dispatch(PausePlayerTrack());
        }) 
    }

    const PauseMusic = () => {
        dispatch(PausePlayerTrack());
        musicTrackState.pause();
    }
    
    const LoopPlayer = () => {
        dispatch(SetPlayerOnLoop(!PlayerIsLoop));
        musicTrackState.loop = !PlayerIsLoop;
    }
   

    const GenerateNewQueue = async() => {
        let RefArtists = null;

        if(tracksQueue[activeQueue]['artists']) {
            RefArtists = tracksQueue[activeQueue]['artists'][0]['id']
        } else if(tracksQueue[activeQueue]['album']) {
            RefArtists = tracksQueue[activeQueue]['album']['artists'][0]['id']
        }

        await dispatch(GetNewTracksQueue(RefArtists));

        return dispatch(SetPlayerLastPosition(0));

    }


    const PlayNextTrack = async () => {

        if(isNewTrackLoading) return;

        let NextIndex = activeQueue + 1;

        if(NextIndex >= tracksQueue.length) {
            return GenerateNewQueue();
        }

        const NextTrack = tracksQueue[NextIndex];
        
        DispatchSelectedTrack(NextTrack , NextIndex);
    }

    const PlayPrevTrack = () => {
        if(isNewTrackLoading) return;

        let NextIndex = activeQueue - 1;

        if(NextIndex < 0) return musicTrackState.currentTime = 0;

        const NextTrack = tracksQueue[NextIndex];

        DispatchSelectedTrack(NextTrack , NextIndex);
    }

    const DispatchSelectedTrack = (NextTrack,NextIndex) => {


        dispatch(SetCurrentSong(NextTrack));
        dispatch(SetCurrentActiveQueue(NextIndex));
        dispatch(SetPlayerLastPosition(0));
        dispatch(PlayPlayerTrack()); 
        
        const CheckedSongs = CachedSongs.filter((i) => i.trackID === NextTrack.id); 
        if(CheckedSongs.length > 0) return dispatch(fetchTrackDetailSuccess(CheckedSongs[0]));
        dispatch(fetchTrackAsync(NextTrack.id));
    }


    return (
        <>
            <div className='player-controls'>
                <button className='back-control' onClick={PlayPrevTrack}>
                    <img src={`${process.env.PUBLIC_URL}/images/icons/player/back.svg`} alt="back" />
                </button>
               
                {isNewTrackLoading &&  
                    <button className='play-control pl-2'>
                        <Spinner />
                    </button>
                }

                {!isNewTrackLoading && 
                    <Fragment>
                        {PlayerTrackStatus ? 
                            <button className='play-control' onClick={PauseMusic}>
                                <img src={`${process.env.PUBLIC_URL}/images/icons/player/pause.svg`} alt="pause" />
                            </button>
                            :
                            <button className='play-control' onClick={PlayMusic}>
                                <img src={`${process.env.PUBLIC_URL}/images/icons/player/play.svg`} alt="play" />
                            </button>
                        }
                    </Fragment>
                }
            
                <button className='next-control' onClick={PlayNextTrack}>
                    <img src={`${process.env.PUBLIC_URL}/images/icons/player/next.svg`} alt="next" />
                </button>
            </div>

            <AppPlayerProgress track={musicTrackState} />

            <div className="player-controls ml-auto">
                <AppPlayerVolume player={musicTrackState}/>
                <button className='next-control' onClick={() => {
                    if(location.pathname === '/queue') return navigate(-1);
                    navigate('/queue')
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={location.pathname === '/queue' ? '#2ca6b7' : '#fff'} preserveAspectRatio="xMidYMin meet" viewBox="-6 -7 25 25">
                        <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"></path>
                    </svg>
                </button>
                <button className='next-control' onClick={LoopPlayer}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={PlayerIsLoop ? '#2ca6b7' : '#fff'} preserveAspectRatio="xMidYMin meet" viewBox="-6 -7 25 25">
                        <path d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"></path>
                    </svg>
                </button>
            </div>         

        </>
    )
}

export default AppPlayerControl;