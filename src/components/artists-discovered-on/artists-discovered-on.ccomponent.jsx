import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SelectArtistsDiscoveredOn } from "../../store/artists-profile/artists-profile.selector";
import DisplayCard from "../display-card/display-card.component";

const ArtistsDiscoveredOn = () => {

    const ArtistsDiscoveredOn = useSelector(SelectArtistsDiscoveredOn);

    const navigate = useNavigate();
    
    if(ArtistsDiscoveredOn.length === 0) return;

    return (
        <div className="px-10 discography-wrapper mb-10">
            <h3 className="text-3xl font-bold mb-10">Discovered On</h3>

            <div class="grid grid-cols-6 gap-4 mt-5 ">
                {ArtistsDiscoveredOn.map((item,index) => index < 6 
                    && <DisplayCard 
                        key={index}
                        cc={'h-60'} 
                        name={item.name} 
                        image={item.images.length !== 0 && item.images[0][0]['url']} 
                        type={item.type} 
                        onClick={() => navigate(`/${item.type}/${item.id}`)}/>)
                }
            </div>
            
        </div>
    )
}

export default ArtistsDiscoveredOn;