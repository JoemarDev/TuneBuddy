import { useEffect } from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DisplayGenreCard from '../../components/display-genre-card/display-genre-card.component';
import SearchInput from '../../components/search-input/search-input.component';
import SearchResult from '../../components/search-result/search-result.component';
import SearchResultPlaceholder from '../../components/search-result/search-result.placeholder';
import GenreLists from '../../JSON/Genres/genres.json'
import { resetSearch } from '../../store/search/search.action';
import { selectCurrentSearch, selectIsSearchIsLoading } from '../../store/search/search.selector';
const Search = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const currentSearch = useSelector(selectCurrentSearch);
    const IsSearchLoading = useSelector(selectIsSearchIsLoading);
    useEffect(() => {
        // This is to reset the search data when leave in the search routes
        // const ResetSearchData = () => dispatch(resetSearch());
        // ResetSearchData();

    },[]);

    return (
        <div className='p-16 max-lg:px-5'>
         
            
            <div className="search-input">
                <SearchInput />

                {IsSearchLoading && <SearchResultPlaceholder />}
                {!IsSearchLoading && 
                    <Fragment>
                        {currentSearch && <SearchResult />}
                    </Fragment>
                }
                {!currentSearch && 
                    <Fragment>
                        <label className="mb-5 font-normal block text-2xl ">Browse All</label>
                            <div className="grid grid-cols-5 gap-4 mt-5 max-2xl:grid-cols-3 max-md:grid-cols-2">
                                {GenreLists.map((item,index) => (
                                    <DisplayGenreCard key={index} name={item.name} onClick={() => navigate('/genre/'+item.key)}/>
                                ))}
                            </div>
                    </Fragment>
                }

               
               
            </div>
        </div>
    )
}

export default Search;