import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SelectArtistsFeaturing, SelectArtistsName } from "../../store/artists-profile/artists-profile.selector";
import DisplayCard from "../display-card/display-card.component";

const ArtistsFeaturing = ({config , cc}) => {

    const ArtistName = useSelector(SelectArtistsName);
    const ArtistFeatured = useSelector(SelectArtistsFeaturing);
    const navigate = useNavigate();
    
    if(ArtistFeatured.length === 0) return;

    return (
        <div className={`px-10 discography-wrapper mb-10 ${cc}`}>

            <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold mb-10">Featuring {ArtistName}</h3>
                {config !== 'all' 
                    && <h3 className="text-lg text-slate-400 font-bold mb-5 cursor-pointer" onClick={() => navigate('featuring/all')}>SEE ALL</h3>
                }
            </div>

            <div class="grid grid-cols-6 gap-4 mt-5 ">
                {ArtistFeatured.map((item,index) => {
                    if(config !== 'all') {
                        if(index > 5) return null; 
                    }

                    return <DisplayCard 
                        key={index}
                        cc={'h-60 '} 
                        name={item.name} 
                        image={item.images.length !== 0 && item.images[0][0]['url']} 
                        type={item.description || 'By Tunebuddy'} 
                        onClick={() => navigate(`/${item.type}/${item.id}`)}/>
                })
                }
            </div>

        </div>
    )
}

export default ArtistsFeaturing;