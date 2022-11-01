import AppLoader from "../app-loader/app-loader.component";

const DisplayBannerPlaceHolder = () => {
    return (
        <>
            <div className="w-full p-16 flex items-end">
                <AppLoader className={'w-64 mr-10 h-64'}/>

                <div className="relative mb-5">
                    <AppLoader className={'h-5 w-40 mb-5'} />
                    <AppLoader className={'h-20 w-96 mb-5'} />
                    <AppLoader className={'h-5 w-80 mb-5'} />
                </div>
            
            </div>
        </>
    )
}

export default DisplayBannerPlaceHolder;