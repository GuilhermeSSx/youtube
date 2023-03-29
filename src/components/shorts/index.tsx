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
                <ShortBanner src="https://i.ytimg.com/vi/nZabgxkevQg/oar2.jpg?sqp=-oaymwEaCJUDENAFSFXyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBu8LBfLeL_7lMzLACXWv-z3Ddl1w" />
                <ShortTitle>Shorts...</ShortTitle>
                <TextShort>5,1 mi de visualizações</TextShort>
            </ShortsContainer>
        </Container>
    )
}

export default Shorts;