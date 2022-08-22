import styled from '@emotion/styled';

interface IShowInfoProps {
    isShowInfo: boolean;
}
interface ICommentsModalProps {
    isModalOpen: boolean;
}

interface IContainerOpenProps {
    isContainerOpen: boolean;
}

export const Container = styled.div<IContainerOpenProps>`
    display: ${props => (props.isContainerOpen ? 'flex' : 'none')};

    flex-direction: column;
    align-items: center;
    gap: 32px;
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
        filter: brightness(1.2);
    }
`;

export const PostUser = styled.div``;

export const PostTitle = styled.h2`
    max-width: 100%;
`;

export const PostBody = styled.h3`
    padding: 8px;
    color: #cfcfcf;
    border-radius: 5px;
    border: 1px solid #515151;
    background-color: #6666;
`;

export const AutorInfoContainer = styled.div<IShowInfoProps>`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0;
    display: ${props => (props.isShowInfo ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(10px);
    padding-top: 32px;
    gap: 8px;
    overflow: none;
`;

export const PostAuthor = styled.h2`
    padding: 24px 32px;
    border-radius: 5px;
    border: 1px solid #515151;
    background-color: #222;
    color: #cfcfcf;
`;

export const CommentsModal = styled.div<ICommentsModalProps>`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0%;
    display: ${props => (props.isModalOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(10px);
    padding-top: 32px;
    gap: 8px;
`;

export const CommentContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    border-radius: 5px;
    background-color: #3b3b3b;
    border-bottom: 1px solid #515151;
`;

export const CommentName = styled.h1``;
export const CommentEmail = styled.h3`
    color: #cfcfcf;
`;

export const CommentBody = styled.h3``;
