import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SelectRelatedArtists } from "../../store/artists-profile/artists-profile.selector";
import DisplayCard from "../display-card/display-card.component";

const ArtistsRelated =  ({config , cc}) => {

    const RelatedArtists = useSelector(SelectRelatedArtists);

    const navigate = useNavigate();

    const GotoAritstsProfile = (artist_id) => navigate(`/artists/${artist_id}`);

    if(RelatedArtists.length === 0) return;

    return (
        <div className={`px-10 discography-wrapper mb-10 ${cc}`}>

            <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold mb-10">Fans also like</h3>
                {config !== 'all' 
                    && <h3 className="text-lg text-slate-400 font-bold mb-5 cursor-pointer" onClick={() => navigate('related-artists/all')}>SEE ALL</h3>
                }
            </div>
            <div class="grid grid-cols-6 gap-4 mt-5">
                {RelatedArtists.map((item,index) => {
                    if(config !== 'all') {
                        if(index > 5) return null; 
                    }

                    return <DisplayCard 
                        onClick={() => GotoAritstsProfile(item.id)} 
                        cc={'h-60 rounded-img-display-card cursor-pointer'} 
                        name={item.name} 
                        image={item.visuals['avatar'] !== undefined && item.visuals['avatar'][0]['url']} 
                        type={'Artist'} 
                        key={index}/>
                    })
                }
            </div>

        </div>
    )
}

export default ArtistsRelated;