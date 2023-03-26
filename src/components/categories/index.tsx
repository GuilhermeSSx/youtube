import { Container, CtButton } from "./styles";

function Categories() {

    return (
        <Container>
            <CtButton style={{ backgroundColor: "black", color: "white"}}>Tudo</CtButton>
            <CtButton>Músicas</CtButton>
            <CtButton>Jogos</CtButton>
            <CtButton>Ao vivo</CtButton>
            <CtButton>House Music</CtButton>
            <CtButton>Comédia</CtButton>
            <CtButton>Música Lo-fi</CtButton>
            <CtButton>Astronomia</CtButton>
            <CtButton>Anime</CtButton>
            <CtButton>Dublagens</CtButton>
            <CtButton>Música Brasileira</CtButton>
            <CtButton>+++</CtButton>
        </Container>
    )
}

export default Categories;