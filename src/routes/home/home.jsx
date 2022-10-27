import './home.styles.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ArtistsPreviewLists from '../../components/artists-preview-lists/artists-preview-lists.component';
import AppLoader from '../../components/app-loader/app-loader.component';

import { SelectArtistsDataDetail, SelectArtistsLists, SelectIsArtistsLoading } from '../../store/artists/artists.selector';
import { GetArtistsAsync } from '../../store/artists/artists.action';
import { Link } from 'react-router-dom';
const Home = () => {
    console.log(process.env)
    const ArtistsDataDetail = useSelector(SelectArtistsDataDetail);
    const isArtistsLoading = useSelector(SelectIsArtistsLoading);
    const ArtistsLists = useSelector(SelectArtistsLists)
    const  dispatch = useDispatch();

    useEffect(() => {
        if(ArtistsLists.length !== 0) return;
        dispatch(GetArtistsAsync());
    },[]);

 

    return (
        <div className='p-16'>
            <div className='top-artists'>
                <div className='flex justify-between items-center mb-10'>
                    {isArtistsLoading 
                        ? <AppLoader className="w-72 h-9  rounded-md"/>
                        : <h2 className='text-2xl font-medium '>{ArtistsDataDetail.title}</h2>
                    }
                    <Link to={'/artists'}>View All</Link>
                </div>
                <ArtistsPreviewLists />
            </div>
        </div>
    )
}

export default Home;