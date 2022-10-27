import { Outlet } from 'react-router-dom';
import AppMenu from '../../components/app-menu/app-menu.component';
import AppBrand from '../../components/brand/brand.component';
import './app-sidebar.styles.scss';

const AppSideBar = () => {
    return (
        <div className="app-wrapper bg-white dark:bg-black">
            <div className='app-sidebar'>
                <AppBrand />
                <AppMenu />
            </div>
            <div className='app-content text-gray-200'>
                <Outlet />
            </div>
        </div>   
    )
}

export default AppSideBar;