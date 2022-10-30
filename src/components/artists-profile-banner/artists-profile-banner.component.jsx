import './artists-profile-banner.styles.scss';
import { 
    SelectArtistsBiography,
    SelectArtistsMontlyListener, 
    SelectArtistsName, 
    SelectArtistsVisualsBanner, 
    SelectArtistVisualAvatar, 
} from '../../store/artists-profile/artists-profile.selector';
import { ConvertWithComma } from '../../utils/basic/basic.utils';
import { useSelector } from 'react-redux';
import { Fragment, useState } from 'react';

const ArtistsProfileBanner = () => {

    const [bioShowMore , setBioShowMore] = useState(false);

    const ArtistsBiography = useSelector(SelectArtistsBiography)
    const ArtistsVisualAvatar = useSelector(SelectArtistVisualAvatar);
    const ArtistName = useSelector(SelectArtistsName);
    const ArtistMonthlyListener = useSelector(SelectArtistsMontlyListener);
    const AristVisualBanner = useSelector(SelectArtistsVisualsBanner);

    return (
        <div className='relative z-10 py-16 px-10 artist-profile-information mb-10 ' 
            style={{
                background : `linear-gradient(0deg, rgb(0, 0, 0) 10%, rgb(255 255 255 / 21%) 100%),  url(${AristVisualBanner})`
            }}>
            <div className='flex items-center'>
                {!AristVisualBanner 
                    && <img className='w-52 h-52 object-cover rounded-full mr-5' src={ArtistsVisualAvatar} alt={ArtistName} />
                }
                
                <div className='relative'>
                    <h2 className='text-8xl font-bold mb-5'>{ArtistName}</h2>
                    <p className="text-xl font-bold">{ConvertWithComma(ArtistMonthlyListener) } Monthly Listener</p>
                </div>
            </div>
            {ArtistsBiography && 
                <Fragment>
                    <div className='max-h-60 overflow-y-scroll mt-5'>  
                        <p className=' max-w-2xl' 
                            dangerouslySetInnerHTML={{__html : bioShowMore ? ArtistsBiography : ArtistsBiography.substring(0,180) + '...'}}>
                        </p>
                    </div>

                    <p className='font-bold text-lg mt-5 cursor-pointer' onClick={() => setBioShowMore(!bioShowMore)}>
                        {!bioShowMore && 'More'}
                        {bioShowMore && 'Less'}
                    </p>
                </Fragment>
            }
            
        
        </div>
    )
}

export default ArtistsProfileBanner;