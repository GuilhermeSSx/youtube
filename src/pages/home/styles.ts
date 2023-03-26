import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1600px;
    display: grid; 
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 40px;
    margin-top: 50px;
`;

export const ShortsContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const ShortsLogoContainer = styled.div`
    margin: 24px 0 24px 8px;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    span {
        align-items: center;
        font-size: 17px;
        font-weight: bold;
    }
`;

export const ShortsLogo = styled.img`
    margin-right: 12px;
    width: 15px;
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Divider = styled.div`
    width: 100%;
    border-top: 4px solid rgba(0, 0, 0, 0.1);
    margin: 15px 0;
`;