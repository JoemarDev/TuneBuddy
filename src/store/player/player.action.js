import { createAction } from "../../utils/reducers/reducer.utils";
import { PLAYER_ACTION_TYPES } from "./player.types";

export const PausePlayerTrack = () =>
    createAction(PLAYER_ACTION_TYPES.SET_PLAYER_TO_PAUSE);

export const PlayPlayerTrack = () => 
    createAction(PLAYER_ACTION_TYPES.SET_PLAYER_TO_PLAY);

export const SetPlayerOnLoop = (isLoop) => (dispatch) => 
    dispatch(createAction(PLAYER_ACTION_TYPES.SET_PLAYER_TO_LOOP , isLoop))

export const SetPlayerLastPosition = (player_position) => (dispatch) => {
    return dispatch(createAction(PLAYER_ACTION_TYPES.SET_PLAYER_TO_LAST_POSITION , player_position))
}
