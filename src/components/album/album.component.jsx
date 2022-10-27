const Album = ({album}) => {
    const {description , cover , name} = album;
    return (
        <div className="text-slate-300 w-96">
            {cover && <img  className="w-full  h-48 object-cover" src={cover[0]['url']} alt={name} />}
            <h3 className="text-2xl">{name}</h3>
            <p className="text-sm">{description}</p>
        </div>
    )
}

export default Album;