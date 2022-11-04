import './home.styles.scss';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeMetaDataAsync } from '../../store/home/home.action';
import { SelectHomeMetaData, SelectIsHomeLoading } from '../../store/home/home.selector';

import HomeDisplay from '../../components/home-display/home-display.component';
import AppLoader from '../../components/app-loader/app-loader.component';


const Home = () => {
    
    const dispatch = useDispatch();
    
    const HomeMetaData = useSelector(SelectHomeMetaData());
    const IsHomeLoading = useSelector(SelectIsHomeLoading());

    useEffect(() => {
        if(HomeMetaData.length > 0) return;

        const GetHomeMetaData = async() => {
            dispatch(fetchHomeMetaDataAsync());
        }

        GetHomeMetaData();

    },[]);

    return (
        <div className='p-16'>
            {IsHomeLoading && <AppLoader className="w-72 h-9 mb-10 rounded-md"/>}
            {IsHomeLoading && [0,0,0,0,0].map((i,x) =>  <AppLoader key={x} className="w-full h-80 rounded-3xl mb-10"/> )}

            {!IsHomeLoading && 
                <Fragment>
                    {HomeMetaData.map((item,index) => {
                        const {name , contents} = item;
                        return <HomeDisplay name={name} contents={contents} key={index}/> 
                    })}
                </Fragment>
            }
        </div>
    )
}

export default Home;