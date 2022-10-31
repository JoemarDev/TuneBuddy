import { useSelector } from "react-redux";
import { SelectArtistsAppearOn } from "../../store/artists-profile/artists-profile.selector";
import DisplayCard from "../display-card/display-card.component";

const ArtistsAppearOn = () => {

    const ArtistAppearOn = useSelector(SelectArtistsAppearOn);
    
    return (
        <div className="px-10 discography-wrapper mb-10">
            <h3 className="text-3xl font-bold mb-10">Appears on</h3>

            <div class="grid grid-cols-6 gap-4 mt-5 ">
                {ArtistAppearOn.map((item,index) => index < 6 && <DisplayCard cc={'h-60'} name={item.name} image={item.cover[0]['url']} type={'Album'} />)}
            </div>

        </div>
    )
}

export default ArtistsAppearOn;