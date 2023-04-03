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
    DropDownItem,
    UserImg,
    DropHeaderContainer,
    DropHeaderText,
    Divider
} from "./styles";
import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/youtube-logo.png';
import Lupa from '../../assets/search.png';
import MicIcon from '../../assets/microfone.png';
import VideoIcon from '../../assets/upload_video.png';
import SubsIcon from '../../assets/subscribers.png';
import Notification from '../../assets/sino.png';
import Logout from "../../assets/logout.png";
import UserImgLogo from "../../assets/user.png";
import { UserContext } from "../../contexts/userContext";
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { VideoContext } from "../../contexts/videoContext";


function Header() {

    const navigate = useNavigate();

    const { openMenu, setOpenMenu, login, logOut, user} = useContext(UserContext);
    const { Search_Video } = useContext(VideoContext);
    const [dropMenu, setDropMenu] = useState(false);
    const [search, setSearch] = useState('');

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
                    <SearchInput type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButton onClick={() => { Search_Video(search); navigate(`/search?search=${search}`); } }>
                    <ButtonIcon alt="" src={Lupa} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>
            { /* 3 */}
            <HeaderButtons>
                <ButtonContainer onClick={() => navigate('/create-video')} margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={VideoIcon} />
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={Notification} />
                </ButtonContainer>
                {login?
                    <DropDown> 
                        <ButtonContainer style={{marginLeft: '30px'}} onClick={() => setDropMenu(!dropMenu)}>
                            <UserImg alt='' src={UserImgLogo} />
                                { /* Inicial do nome do contexto aqui Gui*/ }
                        </ButtonContainer>
                        <DropDownMenu dropMenu={dropMenu}>
                            <DropDownItem>
                                <DropHeaderContainer>
                                    <img  style={{width: '30px', height: '30px'}}alt='' src={UserImgLogo} />
                                    <DropHeaderText>
                                        <p>{`@${user.nome}`}</p>
                                        <a href="my-account" >Gerenciar sua Conta do Google</a>
                                    </DropHeaderText>
                                </DropHeaderContainer>
                                <Divider />
                                <li>
                                    <img src={SubsIcon} alt='' style={{ width: '22px', height: '22px'}}></img>
                                    <span>Meus Videos</span>
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