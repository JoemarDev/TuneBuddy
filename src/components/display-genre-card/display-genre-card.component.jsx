const DisplayGenreCard = ({name , ...other}) => {
    return (
        <div className="w-full h-24 bg-stone-900 rounded-md flex items-center justify-center cursor-pointer" {...other}>
            <label className="text-xl font-light cursor-pointer text-center">{name}</label>
        </div>
    )
}

export default DisplayGenreCard;