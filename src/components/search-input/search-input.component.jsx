import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResultAsync } from "../../store/search/search.action";

const SearchInput = () => {
    
    const dispatch = useDispatch();

    const RunSearchHandler = (word) => dispatch(fetchSearchResultAsync(word))

    const SearchHandler = (e) => {

        const {value } = e.target;

        if(e.code === 'Enter' || e.code === 'NumpadEnter') {
            RunSearchHandler(value);
        }


    }


    return (
        <Fragment>
            <label className="mb-5 font-normal block text-2xl">Search</label>
            <input 
                className="w-full p-3 px-10 font-normal rounded-full outline-0 text-slate-200 mb-10 bg-stone-900" 
                placeholder="Want do you want to listen ?"
                onKeyUpCapture={SearchHandler}/>
        </Fragment>
    )
}

export default SearchInput;