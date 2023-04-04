import { VideoContext } from "../../contexts/videoContext";
import { useContext } from "react";
import { Container } from "./styles";

function Search() {
    const { Search_Video } = useContext(VideoContext);

    console.log(Search_Video);

    return (
        <div>
            <h1>Search</h1>
            <Container>
                <div>
                    {
                        Search_Video.map((video: any) => {
                            return (
                                <div key={video.video_id}>
                                    {video.title}
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </div>

    )
}

export default Search;