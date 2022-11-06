import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import AppMenu from '../../components/app-menu/app-menu.component';
import AppPlayer from '../../components/app-player/app-player.component';
import AppBrand from '../../components/brand/brand.component';
import { SelectTrackAudio } from '../../store/songs/songs.selector';
import './app-sidebar.styles.scss';

const AppSideBar = () => {
    const Track = useSelector(SelectTrackAudio);
    const navigate = useNavigate();
    return (
        <div className="app-wrapper bg-white dark:bg-black pl-72 max-lg:pl-0">
            <div className='app-sidebar max-lg:hidden w-72'>
                <AppBrand />
                <AppMenu />
            </div>
            <div className='app-content text-gray-200 pb-20 relative'>
                <div className='hidden max-lg:block sticky top-0 z-10 bg-black border-b-2 border-stone-900'>
                    <div className='flex px-5 items-center'>
                        <img className='w-32 mr-auto' src={`${process.env.PUBLIC_URL}/images/logo/logo.svg`} alt="app-logo" />
                        <button onClick={() => navigate('/search')} className='flex items-center px-4 py-5 bg-black'><span className="text-stone-500 material-symbols-outlined">search</span></button>
                        <button onClick={() => navigate('/')} className='flex items-center px-4 py-5 bg-black'><span className="text-stone-500 material-symbols-outlined">home</span></button>
                        <button onClick={() => navigate('/artists')} className='flex items-center px-4 py-5 bg-black'><span className="text-stone-500 material-symbols-outlined">group</span></button>
                    </div>
                </div>
                <Outlet />
            </div>
            {Track !== null && <AppPlayer />}
        </div>   
    )
}

export default AppSideBar;