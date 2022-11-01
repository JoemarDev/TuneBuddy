const DisplayBanner = ({
    title = null , 
    type = null ,
    description = null,
    artist_image = null,
    artist_name = null,
    year = null,
    song_count = null,
    length_data = null,
    image = null,
}) => {


  
    return (
        <div className="w-full p-16 flex items-end">
            <div className="relative w-64 mr-10">
                {image && <img className="w-full border-2 border-solid border-slate-900" src={image} alt={title} />}
                
            </div>
            <div className="relative mb-5">
                <label className="font-bold">{type}</label>
                {title &&  <h2 className={`${title.length > 70 ? 'text-3xl' : 'text-6xl'} font-black mb-5`}>{title}</h2>}
               
                {description &&  <p className="text-slate-400 mb-3">{description}</p>}
               
                <div className="flex  items-center">
                    {artist_image && <img className="w-8 h-8 rounded-full mr-3 border-2 border-solid border-slate-800" src={artist_image} alt={artist_name} />}
                    {artist_name && <label className="font-semibold mr-1">{artist_name}</label>}
                    {year && <label className="font-thin mr-1">{year}</label>}
                    {song_count && <label className="font-thin mr-1">{song_count} Song{song_count > 1 && `'s`}</label>}
                    {length_data && <label className="text-slate-400">{length_data}</label>}
                </div>
            </div>
           
        </div>
    )
}

export default DisplayBanner;