import { useContext, useEffect, useState } from 'react';
import { useUsers } from '../../../hooks/useUsers';
import {
    Container,
    User,
    UserEmail,
    UserInfo,
    UserName,
    UserPostsBody,
    UserPostsContent,
    UserPostsModal,
    UserPostsTitle,
    UsersContent,
} from '../../../styles/pages/UsersList/styles';
import { Title } from '../../../styles/styles';
import { Button } from '../../components/Global/Button';
import { AuthContext } from '../../contexts/AuthContext';

export default function UsersList() {
    const { permission } = useContext(AuthContext);
    const { data } = useUsers();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState({
        id: null,
    });
    const [selectedUserPosts, setSelectedUserPosts] = useState([]);
    const [selectedUserInfo, setSelectedUserInfo] = useState(null);

    useEffect(() => {
        const userPosts = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts`,
            );
            const userPostsData = await response.json();
            setSelectedUserPosts(
                userPostsData.filter(post => post.userId === selectedUser.id),
            );
        };
        const handleSelectedUserInfo = setSelectedUserInfo(
            data?.find(user => user.id === selectedUser?.id),
        );
        userPosts();
        console.log(setSelectedUserPosts);
    }, [selectedUser]);

    return (
        <div>
            {permission ? (
                <>
                    <Container>
                        <Title>Usuários:</Title>
                        <UsersContent>
                            {data?.map(user => (
                                <User key={user.id}>
                                    <UserName>
                                        Nome: <br /> {user.name}
                                    </UserName>
                                    <UserEmail>
                                        Email <br /> {user.email}
                                    </UserEmail>
                                    <Button
                                        onClick={() => {
                                            setSelectedUser(user);
                                            setIsOpen(true);
                                        }}
                                    >
                                        Ver posts
                                    </Button>
                                </User>
                            ))}
                        </UsersContent>
                    </Container>
                    <UserPostsContent isModalOpen={isOpen}>
                        <Title>Posts do usuário:</Title>
                        <UserPostsModal>
                            <UserInfo>
                                <UserName>
                                    Nome: <br />
                                    {selectedUserInfo?.name}
                                    <Button
                                        onClick={() => {
                                            setIsOpen(false);
                                        }}
                                    >
                                        Fechar
                                    </Button>
                                </UserName>
                                <UserEmail>
                                    Email <br />
                                    {selectedUserInfo?.email}
                                </UserEmail>
                            </UserInfo>
                            {selectedUserPosts.map(post => (
                                <User key={post.id}>
                                    <UserPostsTitle>
                                        Título: <br /> {post.title}
                                    </UserPostsTitle>
                                    <UserPostsBody>
                                        Texto: <br /> {post.body}
                                    </UserPostsBody>
                                </User>
                            ))}
                        </UserPostsModal>
                    </UserPostsContent>
                </>
            ) : (
                <h1>Permissão negada</h1>
            )}
        </div>
    );
}
