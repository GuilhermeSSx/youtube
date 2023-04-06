import VideoSearchComponent from "../../components/videoSearchComponent";
import { VideoContext } from "../../contexts/videoContext";
import { Container, MyVideosContainer } from "./styles";
import { useContext } from "react";

function MyVideos() {

    const { videosUser } = useContext(VideoContext);

    return (
        <Container>
            <MyVideosContainer>
                <h3>Meus Videos</h3>
                {
                    videosUser.map((video: any) => {
                        return (
                            <VideoSearchComponent key={video.video_id} video={video}/>
                        )
                    })
                }
            </MyVideosContainer>
        </Container>

    )
}

export default MyVideos;