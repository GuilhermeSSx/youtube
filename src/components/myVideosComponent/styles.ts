import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const RowContainer = styled.div`
    display: flex;
    :hover {
        background-color: #f2f2f2;
    }
    border-bottom: 1px solid #e6e6e6;
    padding: 10px;
`;

export const Cell = styled.div`
    width: 529px;
`;

export const CheckBoxContainer = styled.div`
    width: 70px;
    align-self: center;
`;

export const CheckBox = styled.input`
    width: 20px;
    height: 20px;
    margin: 10px;
`;

export const ImgTitleContainer = styled.div`
    width: 100%;
    display: flex;
    border-right: 1px solid #e6e6e6;
`;

export const ImageBanner = styled.img`
    width: 150px;
    border-radius: 5px;
    cursor: pointer;
    border-right: black;
`;

export const Title = styled.h3`
    padding-left: 15px;
    width: 300px;
    font-size: 14px;
    font-weight: 500;
    color: black;
    margin: 0 0 4px 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    cursor: pointer;
    align-self: center;
`;

export const TextCard = styled.span`
    font-size: 14px;
    color: #8c8c8c;
    padding: 10px;
`;
