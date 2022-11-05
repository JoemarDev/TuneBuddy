import AppLoader from "../app-loader/app-loader.component";

const SearchResultPlaceholder = () => {
    return (
        <>
             <div className="flex mb-10 px-4">
                <div className="w-1/4">
                    <AppLoader className="w-2/3 h-8 mb-5" />
                    <AppLoader className="w-full h-72" />
                </div>
                <div className="w-3/4 px-4">
                    <AppLoader className="w-40 h-8 mb-10" />
                    <AppLoader className="w-full h-12  mb-5" />
                    <AppLoader className="w-full h-12  mb-5" />
                    <AppLoader className="w-full h-12  mb-5" />
                    <AppLoader className="w-full h-12  mb-5" />
                </div>
              
             </div>
        </>
    )
}

export default SearchResultPlaceholder;