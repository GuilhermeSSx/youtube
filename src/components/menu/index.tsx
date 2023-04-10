import {
    ButtonIcon,
    Container, MenuItem,
} from "./styles";
import Home from '../../assets/home.png';
import Library from '../../assets/library.png';
import History from '../../assets/history.png';
import ShortsIcon from '../../assets/shorts.png';
import SubsIcon from '../../assets/subscribers.png';
import { Divider } from "../header/styles";
import { useNavigate } from "react-router-dom";

function ActivePageItem() {
    const activePage = window.location.pathname;
    return activePage 
}

const Items1 = [
    {name: 'Início', link: '/', img: Home},
    {name: 'Shorts', link: '/shorts', img: ShortsIcon},
    {name: 'Inscrições', link: '/subscribers', img: SubsIcon}
];

const Items2 = [
    {name: 'Biblioteca', link: '/library', img: Library},
    {name: 'Histórico', link: '/history', img: History}
];

interface IProps {
    openMenu: boolean
}

function Menu({ openMenu }: IProps) {
    const navigate = useNavigate();

    return (
        <div className="MenuContainer">
            <Container openMenu={openMenu}>
            {Items1.map((item) => (
                <MenuItem
                    key={item.name}
                    openMenu={openMenu}
                    onClick={() => navigate(item.link)}
                    active={item.link === ActivePageItem() ? true : false}>
                        <ButtonIcon draggable="false" alt="" src={item.img}/>
                        <span>{item.name}</span> 
                </MenuItem>
            ))}
            <Divider />
            {Items2.map((item) => (
                <MenuItem 
                    key={item.name}
                    openMenu={openMenu}
                    onClick={() => navigate(item.link)}
                    active={item.link === ActivePageItem() ? true : false}>
                        <ButtonIcon draggable="false" alt="" src={item.img}/>
                        <span>{item.name}</span> 
                </MenuItem>
            ))}
            </Container>
        </div>
    )
}

export default Menu;