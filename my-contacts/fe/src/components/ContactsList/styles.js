import styled from "styled-components";

export const Container = styled.div`
    margin-top: 32px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
        font-size: 24px;
        color: #222;
    }

    a {
        font-size: 16px;
        color: ${props => props.theme.colors.primary.main};
        text-decoration: none;
        font-weight: bold;
        border: 2px solid ${props => props.theme.colors.primary.main};
        padding: 8px 16px;
        border-radius: 4px;
        transition: all 0.2s ease-in;

        &:hover {
            background-color: ${props => props.theme.colors.primary.main};
            color: #fff;
        }
    }
`

export const ListContainer = styled.div`
    margin-top: 24px;

    header {
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
