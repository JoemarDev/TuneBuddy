import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AppLoader from "../../components/app-loader/app-loader.component";
import DisplayCard from "../../components/display-card/display-card.component";
import { fetchGenreAsync, fetchGenreSuccess } from "../../store/genre/genre.action";
import { selectCurrentGenreItems, selectCurrentGenreName, selectGenreCached, selectIsGenreIsLoading } from "../../store/genre/genre.selector";

const Genre = () => {
    
    const {genre_id} = useParams();
    const dispatch = useDispatch();
    const CachedGenre = useSelector(selectGenreCached());
    const IsGenreLoading = useSelector(selectIsGenreIsLoading());
    const GenreLists = useSelector(selectCurrentGenreItems());
    const GenreName = useSelector(selectCurrentGenreName());

    const navigate = useNavigate();

    useEffect(() => {

      

        const GetGenreMetaData = async() => {

            let ExistingGenre = CachedGenre.filter((i) => i.id === genre_id);
            if(ExistingGenre.length > 0) return dispatch(fetchGenreSuccess(ExistingGenre[0]));

            dispatch(fetchGenreAsync(genre_id));
        }

        GetGenreMetaData();
    },[]);


    return (
        <Fragment>
            {IsGenreLoading && <AppLoader className="h-80 flex items-center px-16" />}


            {!IsGenreLoading &&  
                <div className="h-80 flex items-center px-10"
                    style={{background: 'linear-gradient(0deg, rgb(0, 0, 0) 10%, rgba(255, 255, 255, 0.21) 100%), url("null")'}}>
                    <h2 className="text-8xl font-bold">{GenreName}</h2>
                </div>
            }

            {!IsGenreLoading &&  
                <div className="p-10">
                    {GenreLists.map((item,index) => (
                        <Fragment>
                            <h3 className="text-3xl font-normal mb-10">{item.name}</h3>
                            <div className="grid grid-cols-5 gap-4 mt-5 mb-20">
                                {item['contents']['items'].map((i,x) => {
                                    const {type , name , images , cover , id} = i;

                                    let DisplayImage = null;

                                    if(images !== undefined)  DisplayImage = images[0][0]['url'];

                                    if(cover !== undefined)  DisplayImage = cover[0]['url'];

                                    return <DisplayCard 
                                        type={type} 
                                        name={name} 
                                        image={DisplayImage} 
                                        onClick={() => navigate(`/${type}/${id}`)}/>
                                })}
                            </div>
                        </Fragment>
                    ))}
                </div>
            }
        </Fragment>
    )
}

export default Genre;