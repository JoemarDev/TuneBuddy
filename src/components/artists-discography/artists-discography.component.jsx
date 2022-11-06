import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SelectArtistsAlbum, SelectArtistsCompilations, SelectArtistsSingles, SelectArtistsTopTracks } from "../../store/artists-profile/artists-profile.selector";
import DisplayCard from "../display-card/display-card.component";

const ArtistsDiscography = ({config , cc}) => {


    const ArtistAlbum = useSelector(SelectArtistsAlbum);
    const ArtistSingles = useSelector(SelectArtistsSingles);
    const ArtistTopTracks = useSelector(SelectArtistsTopTracks);
    const ArtistCompilation = useSelector(SelectArtistsCompilations);
    const [selected , setSelected] = useState(1);

    const navigate = useNavigate();

    return (
        <div className={`px-10 discography-wrapper mb-10 max-lg:px-5 ${cc}`}>
            <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold mb-5">Discography</h3>
                {config !== 'all' 
                    && <h3 className="text-lg text-slate-400 font-bold mb-5 cursor-pointer" onClick={() => navigate('discography/all')}>SEE ALL</h3>
                }
            </div>
            
            <div>
                <ul className="flex mb-5 max-lg:block">
                    {ArtistTopTracks.length > 0 && 
                        <li className={`max-lg:inline-block max-lg:mb-2 px-4 cursor-pointer  ${selected === 1 ? 'bg-white  text-black' : 'bg-zinc-800  text-white'} rounded-full py-1 mr-2`} 
                            onClick={() => setSelected(1)}>Popular release</li>
                    }

                    {ArtistAlbum.length > 0 && 
                        <li className={`max-lg:inline-block max-lg:mb-2 px-4 cursor-pointer  ${selected === 2 ? 'bg-white  text-black' : 'bg-zinc-800  text-white'} rounded-full py-1 mr-2`} 
                        onClick={() => setSelected(2)}>Albums</li>
                    }

                    {ArtistSingles.length > 0 && 
                        <li  className={`max-lg:inline-block max-lg:mb-2 px-4 cursor-pointer  ${selected === 3 ? 'bg-white  text-black' : 'bg-zinc-800  text-white'} rounded-full py-1 mr-2`} 
                            onClick={() => setSelected(3)}>Singles</li>
                    }

                    {ArtistCompilation.length > 0 && 
                        <li className={`max-lg:inline-block max-lg:mb-2 px-4 cursor-pointer ${selected === 4 ? 'bg-white  text-black' : 'bg-zinc-800  text-white'} rounded-full py-1 mr-2`} 
                            onClick={() => setSelected(4)}>Compilations</li>
                    }
                </ul>
            </div>
            {selected === 1 && 
                <div class="grid grid-cols-6 gap-4 mt-5 max-2xl:grid-cols-3 max-md:grid-cols-2">
                    {ArtistTopTracks.map((item,index) => {
                        if(config !== 'all') {
                            if(index > 5) return null; 
                        }
                    
                        return <DisplayCard 
                            key={index} 
                            cc={'h-60'} 
                            name={item.name} 
                            image={item.album['cover']['0']['url']} 
                            type={item.type} 
                            onClick={() => navigate(`/album/${item.album.id}`)}/>
                    })
                    }
                </div>
            }

            {selected === 2 && 
                <div class="grid grid-cols-6 gap-4 mt-5 max-2xl:grid-cols-3 max-md:grid-cols-2">
                    {ArtistAlbum.map((item,index) => index < 6 
                        && <DisplayCard 
                            key={index} cc={'h-60'} 
                            name={item.name} 
                            image={item.cover[0]['url']} 
                            type={item.type} 
                            onClick={() => navigate(`/${item.type}/${item.id}`)}/>)
                    }
                </div>
            }

            {selected === 3 && 
                <div class="grid grid-cols-6 gap-4 mt-5 max-2xl:grid-cols-3 max-md:grid-cols-2">
                    {ArtistSingles.map((item,index) => index < 6 
                        && <DisplayCard 
                            key={index} 
                            cc={'h-60'} 
                            name={item.name} 
                            image={item.cover[0]['url']} 
                            type={item.type} 
                            onClick={() => navigate(`/${item.type}/${item.id}`)}/>)
                    }
                </div>
            }

            {selected === 4 && 
                <div class="grid grid-cols-6 gap-4 mt-5 max-2xl:grid-cols-3 max-md:grid-cols-2">
                    {ArtistCompilation.map((item,index) => index < 6 
                        && <DisplayCard 
                            key={index} 
                            cc={'h-60'} 
                            name={item.name} 
                            image={item.cover[0]['url']} 
                            type={item.type} 
                            onClick={() => navigate(`/${item.type}/${item.id}`)}/>)
                    }
                </div>
            }


        </div>
    )
}

export default ArtistsDiscography;