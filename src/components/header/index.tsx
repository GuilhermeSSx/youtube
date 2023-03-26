import { ButtonContainer,
    ButtonIcon,
    Container,
    LogoContainer,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButtons
} from "./styles";
import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/youtube-logo.png';
import Lupa from '../../assets/search.png';
import MicIcon from '../../assets/microfone.png';
import VideoIcon from '../../assets/video.png';
import Notification from '../../assets/sino.png';
import { UserContext } from "../../contexts/userContext";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";


function Header() {

    const navigate = useNavigate();

    const { openMenu, setOpenMenu, login, logOut} = useContext(UserContext);

    return (
        <Container>
            { /* 1 */}
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 15px 0 0'>
                    <ButtonIcon alt="" src={HamburguerIcon}/>
                </ButtonContainer>
                <img
                    style={{cursor: 'pointer', width: '100px'}}
                    alt=""
                    src={Logo}
                />
            </LogoContainer>
            { /* 2 */}
            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={Lupa} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>
            { /* 3 */}
            <HeaderButtons>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={VideoIcon} />
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={Notification} />
                </ButtonContainer>
                {login?
                <> 
                    <ButtonContainer margin='0 0 0 10px'>
                        Gui { /* Inicial do nome do contecto aqui */}
                    </ButtonContainer>
                    <span onClick={() => logOut()}>Sair</span>
                </>
                :
                    <button onClick={() => {navigate('/login')}}>Fazer Login</button>
                }
            </HeaderButtons>

        </Container>
    )
}

export default Header;