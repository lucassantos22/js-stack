import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    background: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    height: 52px;
    border: 2px solid #fff;
    border-radius:  4px;
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    transition: all 0.1s ease-in;
    filter: none;

    &:focus {
        border: 2px solid ${props => props.theme.colors.primary.main};
    }
`
