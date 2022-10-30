import AppLoader from "../app-loader/app-loader.component";

const ArtistsTopTracksPlaceHolder = () => {
    return (
        <div className="px-10">
            <AppLoader className="h-11 w-40 mb-10"/>
            <AppLoader className="h-11 w-3/5 mb-5"/>
            <AppLoader className="h-11 w-3/5 mb-5"/>
            <AppLoader className="h-11 w-3/5 mb-5"/>
            <AppLoader className="h-11 w-3/5 mb-5"/>
            <AppLoader className="h-11 w-3/5 mb-5"/>
        </div>
    )
}

export default ArtistsTopTracksPlaceHolder;