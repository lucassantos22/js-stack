import styled from "styled-components";

export const Button = styled.button`
    height: 52px;
    padding: 0 16px;
    border: 0;
    font-size: 16px;
    background: ${props => props.theme.colors.primary.main};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    color: #fff;
    border-radius: 4px;
    transition: all 0.1s ease-in;

    &:hover {
        background: ${props => props.theme.colors.primary.light};
    }

    &:active {
        background: ${props => props.theme.colors.primary.dark};
    }

    &:disabled {
        background: #ccc;
        cursor: default;
    }
`;
