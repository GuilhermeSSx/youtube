import MyVideosComponent from "../../components/myVideosComponent";
import { VideoContext } from "../../contexts/videoContext";
import { ContainerMV, HeaderRowVideos, MyVideosContainer, RowContainer } from "./styles";
import { useContext } from "react";

function MyVideos() {

    const { videosUser } = useContext(VideoContext);

    return (
        <ContainerMV>
            <MyVideosContainer>
                <h3>Meus Videos</h3>
                <HeaderRowVideos>
                    <RowContainer>
                        <button>Excluir Video</button>
                        <button>Editar Video</button>
                    </RowContainer>
                </HeaderRowVideos>
                {
                    videosUser.map((video: any) => {
                        return (
                            
                            <MyVideosComponent key={video.video_id} video={video}/>
                        )
                    })
                }
            </MyVideosContainer>
        </ContainerMV>

    )
}

export default MyVideos;