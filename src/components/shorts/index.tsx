import {
    Container,
    ShortBanner,
    ShortsContainer,
    ShortTitle,
    TextShort
} from "./styles";

function Shorts() {

    return (
        <Container>
            <ShortsContainer>
                <ShortBanner src="https://i.ytimg.com/vi/OupmuAVGsLM/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLADwVZPqXg_wKFWPd0djvMSJAKYgA" />
                <ShortTitle>GRINGO TENTANDO PEDIR ALGO NO...</ShortTitle>
                <TextShort>5,1 mi de visualizações</TextShort>
            </ShortsContainer>
        </Container>
    )
}

export default Shorts;