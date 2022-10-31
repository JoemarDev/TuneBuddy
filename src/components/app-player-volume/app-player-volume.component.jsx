import { useEffect } from 'react';
import { useState } from 'react';
import './app-player-volume.styles.scss';

const AppPlayerVolume = ({player}) => {

    const [currentVolume , setCCurrentVolume] = useState(100);
    const [status , setStatus] = useState(4);

    useEffect(() => {
        if(!player) return;
        player.volume = 1
        setCCurrentVolume(100);
        setStatus(4);

    },[player]);

    const ChangeHandler = (e) => {
        if(!player) return;
        const {value} = e.target;
        setCCurrentVolume(value);
        player.volume = value * 0.01;
        if(value > 75) return setStatus(4);
        if(value > 50) return setStatus(3);
        if(value > 5) return setStatus(2);
        if(value < 1) return setStatus(1);

    };


    return (
        <div className="volume-wrapper">
            <input className="h-1 w-20 volume-slider cursor-pointer bg-white" type={'range'} max={100} min={0} value={currentVolume} onChange={ChangeHandler}/>
            {status === 1 && <img className="cursor-pointer volume-icon w-10 h-10 relative" src={`${process.env.PUBLIC_URL}/images/icons/player/volume/off-volume.svg`} alt="" />}
            {status === 2 && <img className="cursor-pointer volume-icon w-10 h-10 relative" src={`${process.env.PUBLIC_URL}/images/icons/player/volume/low-volume.svg`} alt="" />}
            {status === 3 && <img className="cursor-pointer volume-icon w-10 h-10 relative" src={`${process.env.PUBLIC_URL}/images/icons/player/volume/min-volume.svg`} alt="" />}
            {status === 4 && <img className="cursor-pointer volume-icon w-10 h-10 relative" src={`${process.env.PUBLIC_URL}/images/icons/player/volume/max-volume.svg`} alt="" />}
        </div>
        
    )
}

export default AppPlayerVolume;