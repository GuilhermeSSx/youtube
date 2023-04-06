import styled from "styled-components";

export const Container = styled.div`
    min-width: 100%;
    max-width: 360px;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const ImageBanner = styled.img`
    min-height: 185px;
    max-height: 200px;
    border-radius: 10px;
    cursor: pointer;
    :hover {
        border-radius: 0px;
        transition: 0.7s;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 16px;
`;

export const ChannelContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 12px 0;
`;

export const ChannelImage = styled.div`
    background-color: red;
    width: 24px;
    height: 24px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const ChannelName = styled.span`
    margin-left: 8px;
    align-self: center;
    font-family: "Roboto","Arial",sans-serif;
    font-size: 13px;
    font-weight: 400;
`;



export const Title = styled.h3`
    font-size: 17px;
    font-weight: 600;
    color: black;
    margin: 0 0 4px 0;
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
