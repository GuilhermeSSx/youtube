import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    background-color: white;
    position: fixed;
    top: 55px;
`;

export const CtButton = styled.button`
    margin-right: 10px;
    width: fit-content;
    height: 32px;
    border-radius: 8px;
    border: none;
    background-color: #f2f2f2;
    color: black;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;


    :hover {
        background-color: rgba(0, 0, 0, 0.1);
        transition: .5s;
    }
`;

