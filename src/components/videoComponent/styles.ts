import styled from "styled-components";

export const Container = styled.div`
    min-width: 340px;
    max-width: 360px;
    display: flex;
    flex-direction: column;
`;

export const ImageBanner = styled.img`
    width: 100%;
    min-height: 185px;
    max-height: 200px;
    border-radius: 10px;
    cursor: pointer;
    :hover {
        border-radius: 0px;
        transition: 0.7s;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100px;
`;

export const ChannelImage = styled.div`
    background-color: beige;
    width: 36px;
    height: 36px;
    display: flex;
    border-radius: 50%;
    margin-top: 12px;
    margin-right: 12px;
    align-items: center;
    justify-content: center;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: black;
    margin: 12px 0 4px 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    cursor: pointer;
`;

export const TextCard = styled.span`
    font-size: 14px;
    color: #8c8c8c;
`;
