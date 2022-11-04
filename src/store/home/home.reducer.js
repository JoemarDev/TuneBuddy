import { HOME_ACTION_TYPES } from "./home.types";

const HOME_INITIAL_STATE = {
    currentHomeData : [],
    isLoading : false,
    isError : false,
}

export const HomeReducer = (
    state = HOME_INITIAL_STATE,
    action = {}
) => {
    const  {type , payload} = action;

    switch(type) {
        case HOME_ACTION_TYPES.FETCH_HOME_METADATA_START:
            return {...state , isLoading : true};
        case HOME_ACTION_TYPES.FETCH_HOME_METADATA_FAILED:
            return {...state , isLoading : false , isError : true};
        case HOME_ACTION_TYPES.FETCH_HOME_METADATA_SUCCESS:
            return {...state, isLoading : false , currentHomeData : payload}
        default : return state;
    }
}