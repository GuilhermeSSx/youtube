import { 
    ChannelImage,
    Container,
    ImageBanner,
    TextCard,
    TextContainer,
    Title,
    TitleContainer
} from "./styles";

function VideoComponent( {video}: any) {

    return (
        <Container>
            <ImageBanner src={video.image} />
            <TitleContainer>
                <ChannelImage>
                    USR
                </ChannelImage>
                <TextContainer>
                    <Title title={video.title}>{video.title}</Title>
                    <TextCard>{video.channel}</TextCard>
                    <TextCard>{video.views} de visualizações ▪ há {video.time}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;