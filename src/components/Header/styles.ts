import styled from '@emotion/styled';

export const Container = styled.header`
    height: 50px;
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: #3b3b3b;
    gap: 24px;
    color: #f1f1f1;
`;

export const Logo = styled.img`
    height: 50px;
    width: 110px;
    cursor: pointer;
`;

export const Option = styled.h1`
    cursor: pointer;
    font-size: 1rem;

    :hover {
        color: #cfcfcf;
        text-decoration: underline;
    }
`;
