import styled from "styled-components";

export const Container = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const FormContainer = styled.div`
    width: 100%;
    height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 5px solid rgba(255, 255, 255, .5);
    backdrop-filter: blur(3px);
    background-color: #d1d1d1;
    color: white;
`;

export const InputLogin = styled.input`
    width: 200px;
    height: 34px;
    margin: 5px 0;
    padding: 0 15px;
    border: 1px solid #ccc;
    border-radius: 10px;
    outline: none;
`;

export const ButtonLogin = styled.button`
    margin-top: 20px;
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
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    outline: none;
    font-size: 14px;
    font-weight: 600;
    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`;

export const Divider = styled.div`
    top: 100px;
    height: 300px;
    background-color: black;
    width: 1px;
    margin: 0 20px;
`;
