import { createSelector } from "reselect";

const PlayerSelector = (state) => state.Player;

export const SelectTrackPlayerStatus = createSelector(
    [PlayerSelector],
    (playerSlice) => playerSlice.isPlayerPlaying
)

export const SelectIsPlayerOnLoop = createSelector(
    [PlayerSelector],
    (playerSlice) => playerSlice.isPlayerOnLoop
)

export const SelectLastPlayerPosition = createSelector(
    [PlayerSelector],
    (playerSlice) => playerSlice.playerLastPosition
)

export const SelectIsPlayerHaveError = createSelector(
    [PlayerSelector],
    (playerSlice) => playerSlice.isPlayerError
)