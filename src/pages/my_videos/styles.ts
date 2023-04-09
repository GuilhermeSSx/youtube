import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 16px 24px;
    flex-direction: row;
`;

export const MyVideosContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1400px;
`;

export const HeaderRowVideos = styled.div`
    width: 100%;
    position: sticky;
    top: 55px;
    background-color: white;
    z-index: 1;
    transform: translateZ(0);
    padding: 10px 0 10px 0;
    border: 1px solid #e6e6e6;
`;

export const RowContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    button {
        border: 1px solid #e6e6e6;
        height: 30px;
        padding: 0 15px;
        background-color: white;
        color: blue;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        cursor: pointer;
        font-size: 15px;
        font-weight: 500;
        margin-left: 20px;
        &:hover {
            background-color: rgba(0, 153, 255, 0.1);
            border: none;
        }
    }
    
`;
