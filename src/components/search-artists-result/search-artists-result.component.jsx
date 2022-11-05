import { useSelector } from "react-redux";
import { selectSearchArtistsResult } from "../../store/search/search.selector";
import ArtistsCard from "../artists-card/artists-card.component";

const SearchArtistsResult = () => {

    const ArtistsLists = useSelector(selectSearchArtistsResult);

    if(ArtistsLists.length === 0) return;
    return (
        <div className="w-full px-2">
            <h2 className="text-xl font-bold mb-5">Artists</h2>
            <div className="grid grid-cols-5 gap-4 mt-5">
                    {ArtistsLists.map((item,index) => (
                    <ArtistsCard artist={item} key={index}/>
                    ))}
            </div>
        </div>
    )
}

export default SearchArtistsResult;