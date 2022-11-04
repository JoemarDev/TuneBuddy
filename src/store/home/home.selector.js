import { createSelector } from "reselect";

const HomeDataSelector = (state) => state.Home;

export const SelectIsHomeLoading = () => createSelector(
    [HomeDataSelector],
    (HomeDataSplice) => HomeDataSplice.isLoading
);

export const SelectHomeMetaData = () => createSelector(
    [HomeDataSelector],
    (HomeDataSplice) => {
        try {
            const HomeData = HomeDataSplice.currentHomeData;
            if(HomeData['genres']) return HomeData['genres'];
            return [];
        } catch (error) {
            return [];
        }
    }
)
