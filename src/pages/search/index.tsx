import { VideoContext } from "../../contexts/videoContext";
import { useContext } from "react";

function Search() {
    const { videos_search } = useContext(VideoContext);

    return (
        <div>
            <h1>Search</h1>
        </div>

    )
}

export default Search;