import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PausePlayerTrack } from '../../store/player/player.action';
import { SelectTrackPlayerStatus } from '../../store/player/player.selector';
import { SelectSongID } from '../../store/songs/songs.selector';
import { ConvertWithComma } from '../../utils/basic/basic.utils';
import './tracks.styles.scss';

const Tracks = ({
    track , 
    trackNo , 
    isArtist = true , 
    setSong,
    tracksType}) => {
    
    const dispatch = useDispatch();

    const CurrentSong = useSelector(SelectSongID);
    const IsPlayerPlaying = useSelector(SelectTrackPlayerStatus);


    if(!track) return;

    const {name , album , durationText , playCount , id , artists} = track;
    

    const PausePlayer = () => {
        dispatch(PausePlayerTrack());
    }
    
    return (
        <div className={`
            track-container 
            hover:bg-zinc-800 
            py-3 px-5 w-full 
            mt-1 
            rounded 
            flex items-center 
            cursor-pointer 
            ${CurrentSong == id ? 'app-color-blue font-semibold' : 'text-white'}

        `} onDoubleClick={setSong}>

            <p className='mr-5 cursor-pointer w-5 text-center ' >
                {IsPlayerPlaying 
                    ? 
                    <Fragment>
                        {CurrentSong === id 
                            ? <Fragment>
                                <span className='default'><img src={`${process.env.PUBLIC_URL}/images/icons/player/equalizer.svg`} alt="" /> </span>
                                <span onClick={PausePlayer} className='play-icon hidden'><img src={`${process.env.PUBLIC_URL}/images/icons/player/pause.svg`} alt="" /></span>
                            </Fragment>
                            : 
                            <Fragment>
                                <span className='default'>{trackNo}</span>
                                <span className='play-icon hidden' onClick={setSong}><img src={`${process.env.PUBLIC_URL}/images/icons/player/play.svg`} alt="" /></span>
                            </Fragment>
                        }
                    </Fragment>
                    :
                    <Fragment>
                        <span className='default'>{trackNo}</span>
                        <span className='play-icon hidden' onClick={setSong}><img src={`${process.env.PUBLIC_URL}/images/icons/player/play.svg`} alt="" /></span>
                    </Fragment>
                }
               
            </p>

            <div className='flex items-center w-2/4'>
                {album &&    <img className='w-10 mr-5' src={album.cover[0]['url']} alt="" />}
             
                <div>
                    <p>{name}</p>
                    <div className='flex'>
                        {artists &&  artists.map((item,index) => <p className='text-sm text-slate-500 mr-2 whitespace-nowrap' key={index}>{item.name}</p>)}
                       
                        {tracksType === 'playlist' && 
                            <Fragment>
                               {album && album.artists.map((item,index) => <p className='text-sm text-slate-500 mr-2 whitespace-nowrap' key={index}>{item.name}</p>)}
                            </Fragment>
                        }
                     
                    </div>
                </div>
            </div>
            <p className='ml-auto w-52 text-center'>{ConvertWithComma(playCount)}</p>
            <p className='ml-auto'>{durationText}</p>
        </div>
    )
}

export default Tracks;