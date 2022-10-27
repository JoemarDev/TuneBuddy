const Playlist = ({playlist}) => {
    const {description , images , name} = playlist;

    return (
        <div className="text-slate-300 w-96">
            {images && <img  className="w-full  h-48 object-cover" src={images[0][0]['url']} alt={name} />}
            <h3 className="text-2xl">{name}</h3>
            <p className="text-sm">{description}</p>
        </div>
    )
}

export default Playlist;