import './display-card.styles.scss';

const DisplayCard = ({type , name , image , cc , ...other}) => {
    return (
        <div className={`display-card rounded-t-xl mb-10 ${cc}`} {...other}>
            <div className='display-card-overlay pr-2 pl-1'>
                <div className='relative'>
                    <div className='left max-md:hidden'>
                        <span className="material-symbols-outlined text-6xl play-icon">play_circle</span>
                    </div>
                    <div className='right'>
                        <label className='text-md text-white font-bold block truncate w-32'>{name}</label>
                        <label className='text-sm text-slate-300 font-semibold block h-5'>{type}</label>
                    </div>
                </div>
            </div>

            <img className='display-image' src={image || process.env.PUBLIC_URL+'/images/black.webp'} alt={name} />
        </div>
    )
}

export default DisplayCard;