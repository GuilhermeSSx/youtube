import { ButtonContainer,
    ButtonIcon,
    Container,
    LogoContainer,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButtons,
    ButtonLogin,
    DropDownMenu,
    DropDown,
    DropDownItem
} from "./styles";
import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/youtube-logo.png';
import Lupa from '../../assets/search.png';
import MicIcon from '../../assets/microfone.png';
import VideoIcon from '../../assets/upload_video.png';
import Notification from '../../assets/sino.png';
import Logout from "../../assets/logout.png";
import { UserContext } from "../../contexts/userContext";
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";


function Header() {

    const navigate = useNavigate();

    const { openMenu, setOpenMenu, login, logOut} = useContext(UserContext);
    const [dropMenu, setDropMenu] = useState(false);

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
                    onClick={() => navigate('/')}
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
                <ButtonContainer onClick={() => navigate('/upload_video')} margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={VideoIcon} />
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={Notification} />
                </ButtonContainer>
                {login?
                <DropDown> 
                    <ButtonContainer onClick={() => setDropMenu(!dropMenu)}>
                            Gui { /* Inicial do nome do contexto aqui */}
                    </ButtonContainer>
                    <DropDownMenu dropMenu={dropMenu}>
                        <DropDownItem>
                            <li>
                                <img alt='' style={{ width: '22px', height: '22px'}}></img>
                                <span>Cadastro</span>
                            </li>
                            <li onClick={() => logOut()}>
                                <img src={Logout} alt='' style={{ width: '22px', height: '22px'}}></img>
                                <span>Sair</span>
                            </li>
                        </DropDownItem>

                    </DropDownMenu>
                </DropDown>
                :
                    <ButtonLogin onClick={ () => navigate('/login') }>Fazer Login</ButtonLogin>
                }
            </HeaderButtons>

        </Container>
    )
}

export default Header;