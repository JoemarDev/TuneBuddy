import './artists-preview-lists.styles.scss';
import ArtistsCard from '../artists-card/artists-card.component';
import { useSelector } from 'react-redux';
import { SelectIsArtistsLoading, SeletArtistsPreview } from '../../store/artists/artists.selector';
import AppLoader from '../app-loader/app-loader.component';
const ArtistsPreviewLists = () => {

    const ArtistsLists = useSelector(SeletArtistsPreview);
    const isLoading = useSelector(SelectIsArtistsLoading)

    return (
        <div className='artists-lists'>
            {isLoading 
            && [0,0,0,0,0].map((i,x) =>  <AppLoader key={x} className="w-full h-80 rounded-3xl"/> )}
            {ArtistsLists.map((item,index) => <ArtistsCard artist={item} key={index}/>)}
        </div>
    )
}

export default ArtistsPreviewLists;