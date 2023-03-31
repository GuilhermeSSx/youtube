import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu}) => openMenu? '240px' : '72px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: ${({ openMenu}) => openMenu? '14px 12px 12px 12px' : '4px 4px 4px 4px'};
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: sticky;
    top: 55px;

    img {
        -webkit-user-drag: none; 
        -khtml-user-drag: none; 
        -moz-user-drag: none; 
        -o-user-drag: none; 
    }
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
    width: 98%;
    height: 20px;
    min-height: ${({ openMenu}) => openMenu? '40px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu}) => openMenu? 'row' : 'column'};;
    align-items: center;
    justify-content: ${({ openMenu}) => openMenu? 'none' : 'center'};
    span {
        font-weight: ${({ openMenu}) => openMenu? '450' : '300'};;
        margin: ${({ openMenu}) => openMenu? '20px' : 'none'};;
        font-size: ${({ openMenu}) => openMenu? '15px' : '11px'};;
    }
    :hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 17px;
    height: 18px;
`;