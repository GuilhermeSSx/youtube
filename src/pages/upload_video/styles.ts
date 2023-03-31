import styled from "styled-components";

export const ContainerUploadVideo = styled.div`
    margin: 65px 50px;
    padding: 5px;
    width: 88%;
    height: 500px;
    border: 1px solid #000;
    border-radius: 10px;
    border: 5px solid rgba(255, 255, 255, .5);
    backdrop-filter: blur(3px);
    background-color: white;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 50);
`;

export const FormUploadVideo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InputUpVideo = styled.input`
    width: 350px;
    height: 34px;
    margin: 5px 0;
    padding: 0 15px;
    border: 1px solid #ccc;
    border-radius: 10px;
    outline: none;
`;

export const ButtonUpVideo = styled.button`
    margin-top: 20px;
    width: 377px;
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
    width: 100%;
    border-top: .5px solid #bfbfbf;
    margin: 20px 0;
`;