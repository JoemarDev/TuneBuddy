import AppLoader from "../app-loader/app-loader.component";

const ArtistsProfileBannerPlaceholder = () => {
    return (
        <>
            <AppLoader className="relative z-10 py-10 px-10 artist-profile-information mb-10 '"  style={{background : 'transparent'}}>
                <AppLoader className="w-2/3 h-16  mb-5"></AppLoader>
                <AppLoader className="w-2/6 h-8  mb-8"></AppLoader>
                <AppLoader className="w-2/5 h-4  mb-5"></AppLoader>
                <AppLoader className="w-3/12 h-4  mb-8"></AppLoader>
                <AppLoader className="w-20 h-5 "></AppLoader>
            </AppLoader>
        </>
    )
}
export default ArtistsProfileBannerPlaceholder;