import { PLAYER_ACTION_TYPES } from "./player.types";
const PLAYER_INITIAL_STATE = {
    playerLastPosition : 0,
    isPlayerPlaying : false,
    isPlayerOnLoop : false,
}

export const PlayerReducer = (
    state = PLAYER_INITIAL_STATE,
    action = {}
) => {
    const {type , payload} = action;

    switch(type) {
        case PLAYER_ACTION_TYPES.SET_PLAYER_TO_PLAY:
            return {...state , isPlayerPlaying : true}

        case PLAYER_ACTION_TYPES.SET_PLAYER_TO_PAUSE:
            return {...state , isPlayerPlaying : false}

        case PLAYER_ACTION_TYPES.SET_PLAYER_TO_LAST_POSITION:
            return {...state , playerLastPosition: payload}
        
        case PLAYER_ACTION_TYPES.SET_PLAYER_TO_LOOP:
            return {...state , isPlayerOnLoop: payload}
        default : return state;
    }
}