import { ChannelContainer, ChannelImage, ChannelName, Container, ImageBanner, TextCard, TextContainer, Title } from "./styles";
import VideoThumb from "../../assets/video-thumb.png";

function VideoSearchComponent( {video}: any) {

    function elapsedTimeVideoUpload(){
        const dateNow = new Date();
        const date_creation_video = new Date(video.creation_date);
    
        const diffDays = Math.abs(date_creation_video.getDate() - dateNow.getDate());
        const diffHours = Math.abs(date_creation_video.getHours() - dateNow.getHours());
        const diffMinutes = Math.abs(date_creation_video.getMinutes() - dateNow.getMinutes());
        const diffSeconds = Math.abs(date_creation_video.getSeconds() - dateNow.getSeconds());

        if(diffDays === 0 && diffHours === 0 && diffMinutes === 0){
            return `${diffSeconds} segundos`;
        } else if(diffDays === 0 && diffHours === 0){
            return `${diffMinutes} ${diffMinutes === 1 ? 'minuto' : 'minutos'}`;
        } else if(diffDays === 0){
            return `${diffHours} ${diffHours === 1 ? 'hora' : 'horas'}`;
        } else {    
            return `${diffDays} ${diffDays === 1 ? 'dia' : 'dias'}`;
        }
    }
    
    return (
        <Container>
            <ImageBanner src={VideoThumb} />
                <TextContainer>
                    <Title title={video.title}>{video.title}</Title>
                    <TextCard>{video.views} de visualizações ▪ há {elapsedTimeVideoUpload()}</TextCard>
                    <ChannelContainer>
                        <ChannelImage>
                            M
                        </ChannelImage>
                        <ChannelName>Meu Canal</ChannelName>
                    </ChannelContainer>
                    <TextCard>{video.description}</TextCard>
                </TextContainer>
        </Container>
    )
}

export default VideoSearchComponent;