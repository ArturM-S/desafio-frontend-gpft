import styled from '@emotion/styled';

interface IPoststsModalProps {
    isModalOpen: boolean;
}

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
    min-width: 230px;
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
export const UserName = styled.h4`
    display: flex;
    justify-content: space-between;
`;
export const UserEmail = styled.h4``;

export const UserPostsContent = styled.div<IPoststsModalProps>`
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
export const UserPostsModal = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    border-radius: 5px;
    background-color: #3b3b3b;
    border-bottom: 1px solid #515151;
`;
export const UserInfo = styled.div``;

export const UserPostsBody = styled.div``;

export const UserPostsTitle = styled.div``;
