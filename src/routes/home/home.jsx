import './home.styles.scss';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeMetaDataAsync } from '../../store/home/home.action';
import { SelectHomeMetaData, SelectIsHomeLoading } from '../../store/home/home.selector';

import HomeDisplay from '../../components/home-display/home-display.component';
import HomeDisplayPlaceholder from '../../components/home-display/home-display.placeholder';


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
            {IsHomeLoading &&  <HomeDisplayPlaceholder />}
    
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