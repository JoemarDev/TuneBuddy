import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AppMenu from '../../components/app-menu/app-menu.component';
import AppPlayer from '../../components/app-player/app-player.component';
import AppBrand from '../../components/brand/brand.component';
import { SelectTrackAudio } from '../../store/songs/songs.selector';
import './app-sidebar.styles.scss';

const AppSideBar = () => {
    const Track = useSelector(SelectTrackAudio);
 
    return (
        <div className="app-wrapper bg-white dark:bg-black">
            <div className='app-sidebar'>
                <AppBrand />
                <AppMenu />
            </div>
            <div className='app-content text-gray-200'>
                <Outlet />
            </div>
            {Track !== null && <AppPlayer />}
        </div>   
    )
}

export default AppSideBar;