import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSearchAlbumResult } from "../../store/search/search.selector";
import DisplayCard from "../display-card/display-card.component";
const SearchAlbumResult = () => {
    const AlbumResult = useSelector(selectSearchAlbumResult);
    const navigate = useNavigate();

    if(AlbumResult.length === 0) return;

    return (
          <div className="w-full px-2">
                <h2 className="text-xl font-bold mb-5">Albums</h2>
                <div className="grid grid-cols-5 gap-4 mt-5 max-2xl:grid-cols-3 max-md:grid-cols-2">
                     {AlbumResult.map((item,index) => {
                        let DefaultImage = null;
                        if(item.cover) {
                            DefaultImage = item.cover[0]['url']
                        }
                        
                        if(item.images) {
                            DefaultImage = item.images[0][0]['url']
                        }

                        return (
                            <DisplayCard 
                                key={index}
                                cc={'h-60'} 
                                name={item.name} 
                                image={DefaultImage}
                                type={item.type} 
                                onClick={() => navigate(`/${item.type}/${item.id}`)}/>
                         )
                     })}
                </div>
            </div>
    )
}

export default SearchAlbumResult;