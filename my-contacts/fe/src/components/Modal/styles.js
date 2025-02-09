import styled from "styled-components";

export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    background-color: #fff;
    border-radius: 4px;
    padding: 24px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    max-width: 450px;
    width: 100%;

    h1 {
        color: ${props => props.danger ? props.theme.colors.danger.main : props.theme.colors.gray[900]} !important;
        font-size: 22px;
    }

    p {
        margin-top: 8px;
    }
`;

export const Footer = styled.footer`
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .cancel-button {
        background: transparent;
        border: 0;
        font-size: 16px;
        margin-right: 8px;
        color: ${props => props.theme.colors.gray[200]}
    }
`;
