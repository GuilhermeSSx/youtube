import Categories from "../../components/categories";
import Shorts from "../../components/shorts";
import VideoComponent from "../../components/videoComponent";
import { Container, Divider, ShortsContainer, ShortsLogo, ShortsLogoContainer } from "./styles";
import ShortsIcon from '../../assets/shorts_home.png';

const videos = [
    {
        image: 'https://i.ytimg.com/vi/EA_6MTfcAm8/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD9jVuAX5eW4LMeTorx2oMizSKCDg',
        title: 'ACABOU A COMPETIÇÃO! ',
        channel: 'Bruno Bandeira',
        views: '1,5 milhões',
        time: '2 dias',
        keynumber: '1'
    },
    {
        image: 'https://i.ytimg.com/vi/AYrVDgcliF4/maxresdefault.jpg',
        title: 'Power Rangers: Trailer - Netflix',
        channel: 'Netflix Brasil',
        views: '1,5 milhões',
        time: '2 dias',
        keynumber: '2'
    },
    {
        image: 'https://i.ytimg.com/vi/V2qjFtnOxTA/maxresdefault.jpg',
        title: 'Toda a gente é crítica | Pica-Pau',
        channel: 'Bruno Bandeira',
        views: '1,5 milhões',
        time: '2 dias',
        keynumber: '3'
    },
    {
        image: 'https://i.ytimg.com/vi/A6su7JaR_54/maxresdefault.jpg',
        title: 'Introducing iPhone 15 Pro | Apple - (Concept Trailer)',
        channel: 'Apple Official',
        views: '1,5 milhões',
        time: '2 dias',
        keynumber: '4'
    },
    {
        image: 'https://i.ytimg.com/vi/EA_6MTfcAm8/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD9jVuAX5eW4LMeTorx2oMizSKCDg',
        title: 'ACABOU A COMPETIÇÃO! SHANKS DESTRÓI EUSTASS KID e PROVA SER O YONKOU MAIS FORTE - ONE PIECE 1079',
        channel: 'Bruno Bandeira',
        views: '1,5 milhões',
        time: '2 dias',
        keynumber: '5'
    },
    {
        image: 'https://i.ytimg.com/vi/AYrVDgcliF4/maxresdefault.jpg',
        title: 'Power Rangers: Trailer - Netflix',
        channel: 'Netflix Brasil',
        views: '1,5 milhões',
        time: '2 dias',
        keynumber: '6'
    },
    {
        image: 'https://i.ytimg.com/vi/V2qjFtnOxTA/maxresdefault.jpg',
        title: 'Toda a gente é crítica | Pica-Pau',
        channel: 'Bruno Bandeira',
        views: '1,5 milhões',
        time: '2 dias',
        keynumber: '7'
    },
    {
        image: 'https://i.ytimg.com/vi/A6su7JaR_54/maxresdefault.jpg',
        title: 'Introducing iPhone 15 Pro | Apple - (Concept Trailer)',
        channel: 'Apple Official',
        views: '1,5 milhões',
        time: '2 dias',
        keynumber: '8'
    },
    {
        image: 'https://i.ytimg.com/vi/A6su7JaR_54/maxresdefault.jpg',
        title: 'Introducing iPhone 15 Pro | Apple - (Concept Trailer)',
        channel: 'Apple Official',
        views: '1,5 milhões',
        time: '2 dias',
        keynumber: '9'
    },
    {
        image: 'https://i.ytimg.com/vi/A6su7JaR_54/maxresdefault.jpg',
        title: 'Introducing iPhone 15 Pro | Apple',
        channel: 'Apple Official',
        views: '1,5 milhões',
        time: '2 dias',
        keynumber: '10'
    }
]

interface IProps {
    openMenu: boolean
}

function Home({ openMenu }: IProps) {
    return (
        <div className="content">
            <Categories />
            <Container openMenu={openMenu}>
                {videos.map((video) => (
                    <VideoComponent key={video.keynumber} video={video}/>
                ))}
            </Container>
            <Divider />
            <ShortsLogoContainer>
                <ShortsLogo alt="" src={ShortsIcon} />
                <span>Shorts</span>
            </ShortsLogoContainer>
            <ShortsContainer>
                <Shorts />
                <Shorts />
                <Shorts />
                <Shorts />
                <Shorts />
                <Shorts />
                <Shorts />
                <Shorts />
            </ShortsContainer>
            <Container openMenu={openMenu}>
                {videos.map((video) => (
                    <VideoComponent key={video.keynumber} video={video}/>
                ))}
            </Container>
            <Divider />

        </div>
    )
}

export default Home;