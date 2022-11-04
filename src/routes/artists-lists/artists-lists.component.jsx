import ArtistsCard from '../../components/artists-card/artists-card.component';
import AppLoader from '../../components/app-loader/app-loader.component';

import { useDispatch, useSelector } from 'react-redux';
import { SelectIsArtistsLoading, SelectArtistsLists, SelectArtistsDataDetail } from '../../store/artists/artists.selector';
import { useEffect } from 'react';
import { GetArtistsAsync } from '../../store/artists/artists.action';
const ArtistsLists = () => {

    const dispatch = useDispatch();
    const ArtistsDataDetail = useSelector(SelectArtistsDataDetail);
    const ArtistsLists = useSelector(SelectArtistsLists);
    const isLoading = useSelector(SelectIsArtistsLoading);

    useEffect(() => {
        if(ArtistsLists.length !== 0) return;
        dispatch(GetArtistsAsync());
    },[ArtistsLists]);
    

    return (
       <div className='p-16'>
            {isLoading 
                ? <AppLoader className="w-72 h-9 mb-10 rounded-md"/>
                : <h2 className='text-2xl font-medium mb-10'>{ArtistsDataDetail.title}</h2>
            }
            <div className='artists-lists grid grid-cols-5 gap-4 mt-5'>
                {isLoading 
                && [0,0,0,0,0,0,0,0,0,0,0,0].map((i,x) =>  <AppLoader key={x} className="w-full h-80 rounded-3xl mb-10"/> )}
                {ArtistsLists.map((item,index) => <ArtistsCard artist={item} key={index}/>)}
            </div>
       </div>
    )
}

export default ArtistsLists;