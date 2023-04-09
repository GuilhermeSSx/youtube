import { Cell, CheckBox, CheckBoxContainer, Container, ImageBanner, ImgTitleContainer, RowContainer, TextCard, Title } from "./styles";
import VideoThumb from "../../assets/video-thumb.png";

function MyVideosComponent( {video}: any) {

    const date = new Date(video.creation_date);
    
    return (
        <Container>
            <RowContainer>

                <CheckBoxContainer>
                    <CheckBox type="checkbox" />
                </CheckBoxContainer>
                <ImgTitleContainer>
                    <ImageBanner src={VideoThumb} /> 
                    <Title title={video.title}>{video.title}</Title>
                </ImgTitleContainer>
                <Cell>
                    <TextCard>{date.toLocaleDateString()}</TextCard>
                </Cell>
            </RowContainer>
            
        </Container>
    )
}

export default MyVideosComponent;