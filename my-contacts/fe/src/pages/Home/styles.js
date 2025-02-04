import styled from "styled-components";

export const Container = styled.div`
    margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
    width: 100%;

    input {
        width: 100%;
        background: #fff;
        border: none;
        border-radius: 25px;
        height: 50px;
        filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.04));
        color: #bcbcbc;
        padding: 0 16px;
        outline: none;

        &::placeholder {
            color: #bcbcbc;
        }
    }
`;


export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 32px;

    strong {
        font-size: 24px;
    }

    a {
        font-size: 16px;
        color: ${props => props.theme.colors.primary.main};
        text-decoration: none;
        font-weight: bold;
        border: 2px solid ${props => props.theme.colors.primary.main};
        padding: 8px 16px;
        border-radius: 4px;
        transition: all 0.1s ease-in;

        &:hover {
            background-color: ${props => props.theme.colors.primary.main};
            color: #fff;
        }
    }
`

export const ListContainer = styled.div`
    margin-top: 24px;

    header {
        margin-bottom: 8px;

        button {
            background: transparent;
            border: none;
            display: flex;
            align-items: center;

            span {
                margin-right: 8px;
                font-weight: bold;
                color: ${props => props.theme.colors.primary.main};
            }
        }
    }

`

export const Card = styled.div`
    background: #fff;
    box-shadow: 8px 4px 10px rgba(0, 0, 0, 0.04);
    padding: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + & {
        margin-top: 16px;
    }

    .info {
        .contact-name {
            display: flex;
            align-items: center;

            small {
                background: ${props => props.theme.colors.primary.lighter};
                color: ${props => props.theme.colors.primary.main};
                font-weight: bold;
                text-transform: uppercase;
                padding: 4px;
                border-radius: 4px;
                margin-left: 8px;
            }
        }

        span {
            display: block;
            font-size: 14px;
            color: ${props => props.theme.colors.gray[200]};
        }
    }

    .actions {
        display: flex;
        align-items: center;

        button {
            background: transparent;
            border: 0;
            margin-left: 8px;
        }
    }
`
