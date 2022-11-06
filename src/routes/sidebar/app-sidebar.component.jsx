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
        <div className="app-wrapper bg-white dark:bg-black pl-72 max-lg:pl-0">
            <div className='app-sidebar max-lg:hidden w-72'>
                <AppBrand />
                <AppMenu />
            </div>
            <div className='app-content text-gray-200 pb-20 '>
                <Outlet />
            </div>
            {Track !== null && <AppPlayer />}
        </div>   
    )
}

export default AppSideBar;