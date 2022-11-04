import { useLocation, useNavigate } from "react-router-dom";
import AppMenuChild from "../app-menu-child/app-menu-child.component";
import './app-menu.styles.scss';

const AppMenu = () => {

    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className='app-menu-lists text-gray-500'>
            <label className="text-sm app-menu-title text-slate-400 mb-5 block">Menu</label>

            <AppMenuChild 
                onClick={() => navigate('/search')} 
                name={'Search'} 
                icon={<span className="material-symbols-outlined">search</span>} 
                className={`app-menu-child ${location.pathname === '/search' ? 'text-gray-200' : ''}`}
            />

            <AppMenuChild 
                onClick={() => navigate('/')} 
                name={'Home'} 
                icon={<span className="material-symbols-outlined">home</span>} 
                className={`app-menu-child ${location.pathname === '/' ? 'text-gray-200' : ''}`}
            />

            <AppMenuChild 
                onClick={() => navigate('/artists')} 
                name={'Artists'} icon={<span className="material-symbols-outlined">group</span>} 
                className={`app-menu-child ${location.pathname === '/artists' ? 'text-gray-200' : ''}`}
            />

            <label className="text-sm app-menu-title text-slate-400 my-5 block">Your Library</label>

            <AppMenuChild name={'Recently Played'} icon={<span className="material-symbols-outlined">timeline</span>} className={'app-menu-child'}/>
            <AppMenuChild name={'Favorite Tracks'} icon={<span className="material-symbols-outlined">favorite</span>} className={'app-menu-child'}/>
            <AppMenuChild name={'Charts'}  icon={<span className="material-symbols-outlined">equalizer</span>} className={'app-menu-child'}/>

          
        </div>
    )
}

export default AppMenu;