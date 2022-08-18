import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 32px 0 0 0;
`;

export const Post = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 5px;
    background-color: #3b3b3b;
    padding: 16px;
    border: 1px solid #515151;
    :hover {
        cursor: pointer;
        filter: brightness(1.2);
    }
`;

export const PostTitle = styled.h1`
    text-decoration: underline;
`;

export const PostBody = styled.h3`
    padding: 8px;
    color: #cfcfcf;
    border-radius: 5px;
    border: 1px solid #515151;
    background-color: #6666;
`;

export const PostAuthor = styled.h2`
    color: #cfcfcf;
`;
