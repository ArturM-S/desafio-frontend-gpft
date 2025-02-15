import styled from '@emotion/styled';

export const Container = styled.div`
    margin-top: 128px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 5px;
    background-color: #3b3b3b;
    padding: 16px;
    border: 1px solid #515151;
`;

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export const LoginFormTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 400;
    color: #f1f1f1;
`;
