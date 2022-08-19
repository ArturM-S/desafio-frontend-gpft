import { useContext } from 'react';
import { useUsers } from '../../../hooks/useUsers';
import {
    Container,
    User,
    UserEmail,
    UserName,
    UsersContent,
} from '../../../styles/pages/UsersList/styles';
import { Title } from '../../../styles/styles';
import { AuthContext } from '../../contexts/AuthContext';

export default function UsersList() {
    const { permission } = useContext(AuthContext);
    const { data } = useUsers();
    console.log(data);

    return (
        <div>
            {permission ? (
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
                            </User>
                        ))}
                    </UsersContent>
                </Container>
            ) : (
                <h1>Permissão negada</h1>
            )}
        </div>
    );
}
