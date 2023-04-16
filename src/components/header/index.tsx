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
    Divider,
    BtnsLogged,
    UserImgDropDown
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
    const { Search_Video, Videos_User } = useContext(VideoContext);
    const [dropMenu, setDropMenu] = useState(false);
    const [search, setSearch] = useState('');

    function searchInputIsBlank(){
        if(search !== ''){
            { Search_Video(search); navigate(`/search?search=${search}`); }
        }
    }

    return (
        <Container>
            { /* 1 Logo */}
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
            { /* 2 Search */}
            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput type={'text'} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButton onClick={() => searchInputIsBlank() }>
                    <ButtonIcon alt="" src={Lupa} />
                </SearchButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon alt="" src={MicIcon} />
                </ButtonContainer>
            </SearchContainer>
            { /* 3 Buttons Right */}
            <HeaderButtons>
                {login? 
                    <BtnsLogged>
                        <ButtonContainer onClick={() => navigate('/create-video')} margin='0 0 0 10px'>
                            <ButtonIcon alt="" src={VideoIcon} />
                        </ButtonContainer>
                        <ButtonContainer margin='0 0 0 10px'>
                            <ButtonIcon alt="" src={Notification} />
                        </ButtonContainer>
                    </BtnsLogged>
                :
                    <></>
                }
                {login?
                    <DropDown> 
                        <ButtonContainer onClick={() => setDropMenu(!dropMenu)}>
                            <UserImg alt='' src={UserImgLogo} />
                        </ButtonContainer>
                        <DropDownMenu dropMenu={dropMenu}>
                            <DropDownItem>
                                <DropHeaderContainer>
                                    <UserImgDropDown alt='' src={UserImgLogo} />
                                    <DropHeaderText>
                                        <span>{user.nome}</span>
                                        <span>{`@${user.nome}`}</span>
                                        <a href="my-account">Gerenciar sua Conta do Google</a>
                                    </DropHeaderText>
                                </DropHeaderContainer>
                                <Divider />
                                <li onClick={ () => { Videos_User(user.id); navigate(`/get-videos/${user.id}`); } }>
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