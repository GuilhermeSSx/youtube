import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu}) => openMenu? '250px' : '72px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: ${({ openMenu}) => openMenu? '10px 10px 10px 10px' : '5px 5px 5px 5px'};
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    position: sticky;
    top: 55px;
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
    width: 98%;
    height: 20px;
    min-height: ${({ openMenu}) => openMenu? '45px' : '70px'};
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
        font-size: ${({ openMenu}) => openMenu? '16px' : '11px'};;
    }
    :hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
    height: 20px;
`;