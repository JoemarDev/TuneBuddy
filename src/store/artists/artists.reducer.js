import { ARTISTS_ACTION_TYPES } from "./artists.types";

const ARTISTS_INITIAL_STATE = {
    title : '',
    description : '',
    date : '',
    artists : [],
    isLoading : false,
    error : null,
}

export const ArtistsReducer = (
    state = ARTISTS_INITIAL_STATE,
    action = {}
) => {

    const {type , payload} = action;

    switch(type) {
        case ARTISTS_ACTION_TYPES.FETCH_ARTISTS_START:
            return {...state , isLoading: true}
        case ARTISTS_ACTION_TYPES.FETCH_ARTISTS_SUCCESS:
            return {
                ...state , 
                title : payload['title'], 
                description : payload['description'], 
                date : payload['date'], 
                artists : payload['artists'], 
                isLoading : false
            }
        case ARTISTS_ACTION_TYPES.FETCH_ARTISTS_FAILED:
            return {...state , error : payload , isLoading : false}
        default : 
            return {...state}
    }
}