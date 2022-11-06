import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SelectArtistsAppearOn } from "../../store/artists-profile/artists-profile.selector";
import DisplayCard from "../display-card/display-card.component";

const ArtistsAppearOn = ({config , cc}) => {

    const ArtistAppearOn = useSelector(SelectArtistsAppearOn);
    const navigate = useNavigate();
    return (
        <div className={`px-10 max-lg:px-5 discography-wrapper mb-10 ${cc}`}>

            <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold mb-10">Appears on</h3>
                {config !== 'all' 
                    && <h3 className="text-lg text-slate-400 font-bold mb-5 cursor-pointer" onClick={() => navigate('appears-on/all')}>SEE ALL</h3>
                }
            </div>

            <div class="grid grid-cols-6 gap-4 mt-5 max-2xl:grid-cols-3 max-md:grid-cols-2">
                {ArtistAppearOn.map((item,index) => index < 6 
                    && <DisplayCard 
                        key={index}
                        cc={'h-60'} 
                        name={item.name} 
                        image={item.cover[0]['url']} 
                        type={item.type} 
                        onClick={() => navigate(`/${item.type}/${item.id}`)}/>)
                }
            </div>

        </div>
    )
}

export default ArtistsAppearOn;