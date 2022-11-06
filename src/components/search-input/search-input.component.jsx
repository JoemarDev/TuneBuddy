import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResultAsync } from "../../store/search/search.action";

const SearchInput = () => {
    
    const [word , setWord] = useState();

    const dispatch = useDispatch();

    const RunSearchHandler = (word) => dispatch(fetchSearchResultAsync(word))

    const SearchHandler = (e) => {
        const {value } = e.target;

        if(e.code === 'Enter' || e.code === 'NumpadEnter') {
            RunSearchHandler(value);
        }
    }


    return (
        <div className="relative">
            <label className="mb-5 font-normal block text-2xl">Search</label>
            <input 
                className="w-full p-3 px-10 font-normal rounded-full outline-0 text-slate-200 mb-10 bg-stone-900" 
                placeholder="Want do you want to listen ?"
                onKeyUpCapture={SearchHandler}
                onChange={(e) => setWord(e.target.value)}
                value={word}/>
                <button className="absolute right-5" style={{top : '58px'}} onClick={() => RunSearchHandler(word)} >
                    <span class="material-symbols-outlined text-3xl">
                        search
                    </span>
                </button>
        </div>
    )
}

export default SearchInput;