import AppMenuChild from "../app-menu-child/app-menu-child.component";
import './app-menu.styles.scss';
import { GetHomeGenres } from "../../api/Spotify";
import { useEffect } from "react";
import { useState } from "react";

const AppMenu = () => {

    const [homeData , setHomeData] = useState([]);

    useEffect(() => {
        const FetchHomeGenres = async () => {
            const genres = await GetHomeGenres();
            setHomeData(genres['contents']['items']);
        }
        FetchHomeGenres();
    },[]);
    return (
        <div className='app-menu-lists text-gray-500'>
            <label className="text-sm app-menu-title text-slate-400 mb-5 block">Menu</label>
            <AppMenuChild name={'Home'} icon={<span className="material-symbols-outlined">home</span>} className={'app-menu-child text-gray-200'}/>
            <AppMenuChild name={'Albums'} icon={<span className="material-symbols-outlined">library_music</span>} className={'app-menu-child'}/>
            <AppMenuChild name={'Trending'} icon={<span className="material-symbols-outlined">trending_up</span>} className={'app-menu-child'}/>

            <label className="text-sm app-menu-title text-slate-400 my-5 block">Popular Playlists</label>

            {homeData.map((data,index) => (
                  <AppMenuChild key={index} name={data.name} icon={<span className="material-symbols-outlined">queue_music</span>} className={'app-menu-child'}/>
            ))}

            <label className="text-sm app-menu-title text-slate-400 my-5 block">Your Library</label>

            <AppMenuChild name={'Recently Played'} icon={<span className="material-symbols-outlined">timeline</span>} className={'app-menu-child'}/>
            <AppMenuChild name={'Favorite Tracks'} icon={<span className="material-symbols-outlined">favorite</span>} className={'app-menu-child'}/>
            <AppMenuChild name={'Charts'}  icon={<span className="material-symbols-outlined">equalizer</span>} className={'app-menu-child'}/>

          
        </div>
    )
}

export default AppMenu;