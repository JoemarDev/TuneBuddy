import { GetHomeAPI } from "../../api/Spotify";
import { createAction } from "../../utils/reducers/reducer.utils";

import { HOME_ACTION_TYPES } from "./home.types";

export const fetchHomeMetaDataStart = () =>
    createAction(HOME_ACTION_TYPES.FETCH_HOME_METADATA_START);
    
export const fetchHomeDataFailed = () =>
    createAction(HOME_ACTION_TYPES.FETCH_HOME_METADATA_FAILED);

export const fetchHomeMetaDataSuccess = (HomeMetaData) => 
    createAction(HOME_ACTION_TYPES.FETCH_HOME_METADATA_SUCCESS, HomeMetaData);

export const fetchHomeMetaDataAsync = () => async(dispatch) => {
    dispatch(fetchHomeMetaDataStart());
    try {
        const HomeMetaData = await GetHomeAPI();
        dispatch(fetchHomeMetaDataSuccess(HomeMetaData));
    } catch (error) {
        dispatch(fetchHomeDataFailed());
    }
}