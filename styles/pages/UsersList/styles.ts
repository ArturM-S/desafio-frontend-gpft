import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    gap: 16px;
`;

export const UsersContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
`;

export const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    background-color: #3b3b3b;
    border: 1px solid #515151;
    border-radius: 5px;
    :hover {
        filter: brightness(1.2);
    }
`;
export const UserName = styled.h4``;
export const UserEmail = styled.h4``;
