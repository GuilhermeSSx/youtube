import { VideoContext } from "../../contexts/videoContext";
import { useContext } from "react";
import { Container, FilterContainer, VideosSearchContainer } from "./styles";
import VideoSearchComponent from "../../components/videoSearchComponent";

function Search() {
    const { videoSearch } = useContext(VideoContext);

    return (
        <Container>
            <VideosSearchContainer>
                <span>Filtros</span>
                <FilterContainer />
                {
                    videoSearch.map((video: any) => {
                        return (
                            <VideoSearchComponent key={video.video_id} video={video}/>
                        )
                    })
                }
            </VideosSearchContainer>
        </Container>
    )
}

export default Search;