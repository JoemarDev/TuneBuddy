import './artists-card.styles.scss';
import { useNavigate } from 'react-router-dom';
const ArtistsCard = ({artist}) => {
    

    const {visuals , name , id} = artist;

    const ArtistsImage = visuals['avatar'][0]['url'];

    const navigate = useNavigate();

    const GoToArtistProfile = () => {
        navigate(`/artists/${id}`)
    }

    return (
        <div className="artist-card rounded-3xl mb-10" onClick={GoToArtistProfile}>
            <div className='artist-card-overlay'>
                <div className='relative'>
                    <div className='left'>
                    <span className="material-symbols-outlined text-6xl play-icon">play_circle</span>
                    </div>
                    <div className='right'>
                        <label className='text-lg text-white font-bold block'>{name}</label>
                        <label className='text-md text-slate-300 font-semibold block'>Artist</label>
                    </div>
                </div>
            </div>

            <img className='artist-image' src={ArtistsImage} alt={name} />
        </div>
    )
}

export default ArtistsCard;