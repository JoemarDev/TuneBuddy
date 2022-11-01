import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SelectArtistsPlaylists } from "../../store/artists-profile/artists-profile.selector";
import DisplayCard from "../display-card/display-card.component";

const ArtistsPlaylists = () => {

    const ArtistsPlaylists = useSelector(SelectArtistsPlaylists);
    const navigate = useNavigate();

    if(ArtistsPlaylists.length === 0) return;
    return (
        <div className="px-10 discography-wrapper mb-10">
            <h3 className="text-3xl font-bold mb-10">Artist Playlists</h3>

            <div class="grid grid-cols-6 gap-4 mt-5 ">
                {ArtistsPlaylists.map((item,index) => index < 6 
                    && <DisplayCard 
                        key={index}
                        cc={'h-60'} 
                        name={item.name} 
                        image={item.images.length !== 0 && item.images[0][0]['url']} 
                        type={'Playlist'} 
                        onClick={() => navigate(`/${item.type}/${item.id}`)}/>)
                    }
            </div>
        </div>
    )
}

export default ArtistsPlaylists;