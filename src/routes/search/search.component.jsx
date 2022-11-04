import { useNavigate } from 'react-router-dom';
import DisplayGenreCard from '../../components/display-genre-card/display-genre-card.component';
import GenreLists from '../../JSON/Genres/genres.json'
const Search = () => {

    const navigate = useNavigate();

    return (
        <div className='p-16'>
            <div className="search-input">
                <label className="mb-5 font-normal block text-2xl">Search</label>
                <input className="w-full p-3 px-10 font-normal rounded-full outline-0 text-slate-200 mb-10 bg-slate-800" placeholder="Want do you want to listen ?"/>
                <label className="mb-5 font-normal block text-2xl">Browse All</label>
                <div className="grid grid-cols-5 gap-4 mt-5">
                    {GenreLists.map((item,index) => (
                        <DisplayGenreCard name={item.name} onClick={() => navigate('/genre/'+item.key)}/>
                    ))}
                </div>
               
            </div>
        </div>
    )
}

export default Search;