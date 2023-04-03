import styled from 'styled-components';


export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0px;
    z-index: 2;

    img {
        -webkit-user-drag: none; 
        -khtml-user-drag: none; 
        -moz-user-drag: none; 
        -o-user-drag: none; 
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin : 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 18px;
    justify-content: space-between;
`;

export const SearchContainer = styled.div`
    display: flex;
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100px;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #f2f2f2;
    }
`;

export const HeaderButtons = styled.div`
    width: 225px;
    height: 40px;
    display: flex;
    align-items: center;
`;

export const ButtonLogin = styled.button`
    width: 128px;
    height: 34px;
    padding: 0 15px;
    border-width: 1px;
    border-style: solid;
    background-color: white;
    color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    cursor: pointer;
    font-size: 16px;
    outline: none;
    font-size: 15px;
    font-weight: 500;
    margin-left: 5px;
    &:hover {
        background-color: rgba(0, 153, 255, 0.1);
        border: none;
    }
`;

export const DropDown = styled.div`
    position: relative;
`;

export const DropDownMenu = styled.div<{ dropMenu: boolean }>`
    visibility: ${({ dropMenu }) => dropMenu ? 'visible' : 'hidden'};
    background-color: #fff;
    width: 250px;
    height: auto;
    border: 1px solid #d3d3d3;
    position: absolute;
    left: -130px;
    top: calc(100% + 5px);
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15);
    li {
        list-style: none;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        font-size: 15px;
        cursor: pointer;
        :hover {
            background-color: #d3d3d3;
            border-radius: 10px;
        }
    }
`;

export const DropDownItem = styled.div`
    display: flex;
    flex-direction: column;
    span {
        font-weight: 450;
        margin: 20px;
        font-size: 16px;
    }
`;



export const Divider = styled.div`
    width: 100%;
    border-top: .5px solid #bfbfbf;
    margin: 20px 0;
`;

