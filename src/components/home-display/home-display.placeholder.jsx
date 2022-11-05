import AppLoader from '../../components/app-loader/app-loader.component';
const HomeDisplayPlaceholder = () => {
    return (
        <>
            <AppLoader className="w-72 h-9 mb-10 rounded-md"/>
            <div className="grid grid-cols-5 gap-4 mt-5 ">
                {[0,0,0,0,0].map((i,x) =>  <AppLoader key={x} className="w-full h-56 rounded-3xl mb-10"/> )}
            </div>
            <AppLoader className="w-72 h-9 mb-10 rounded-md"/>
            <div className="grid grid-cols-5 gap-4 mt-5 ">
                {[0,0,0,0,0].map((i,x) =>  <AppLoader key={x} className="w-full h-56 rounded-3xl mb-10"/> )}
            </div>
            <AppLoader className="w-72 h-9 mb-10 rounded-md"/>
            <div className="grid grid-cols-5 gap-4 mt-5 ">
                {[0,0,0,0,0].map((i,x) =>  <AppLoader key={x} className="w-full h-56 rounded-3xl mb-10"/> )}
            </div>
            <AppLoader className="w-72 h-9 mb-10 rounded-md"/>
            <div className="grid grid-cols-5 gap-4 mt-5 ">
                {[0,0,0,0,0].map((i,x) =>  <AppLoader key={x} className="w-full h-56 rounded-3xl mb-10"/> )}
            </div>
           

        </>
    )
}

export default HomeDisplayPlaceholder;