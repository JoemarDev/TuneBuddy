import { Fragment } from "react";
import SearchAlbumResult from "../search-album-result/search-album-result.component";
import SearchArtistsResult from "../search-artists-result/search-artists-result.component";
import SearchPlaylistsResult from "../search-playlists-result/search-playlists-result.component";
import SearchTopResult from "../search-top-result/search-top-result.component";
import SearchTrackLists from "../search-tracks-lists/search-tracks-lists.component";

const SearchResult = () => {

    return (
        <Fragment>
            <div className="flex mb-10 max-xl:block">
                <SearchTopResult />
                <SearchTrackLists />
            </div>
            <SearchArtistsResult />
            <SearchAlbumResult />
            <SearchPlaylistsResult />
        </Fragment>
    )
}

export default SearchResult;