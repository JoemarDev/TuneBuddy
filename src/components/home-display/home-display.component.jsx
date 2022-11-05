import { useNavigate } from "react-router-dom";
import DisplayCard from "../display-card/display-card.component";
const HomeDisplay = ({name , contents}) => {
    
    const navigate = useNavigate();

    return (
        <div >
            <h3 className="text-3xl font-normal mb-10">{name}</h3>
            <div className="grid grid-cols-5 gap-4 mt-5">
                {contents.items.map((i,x) => {
                    const {type , name , images , cover , id} = i;

                    let DisplayImage = null;

                    if(images !== undefined)  DisplayImage = images[0][0]['url'];

                    if(cover !== undefined)  DisplayImage = cover[0]['url'];

                    return <DisplayCard 
                        key={x}
                        type={type} 
                        name={name} 
                        image={DisplayImage} 
                        onClick={() => navigate(`${type}/${id}`)}/>
                })}
            </div>
        </div>
    )
}

export default HomeDisplay;