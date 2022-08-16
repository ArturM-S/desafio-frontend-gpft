import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    Container,
    LoginBox,
    LoginForm,
    LoginFormTitle,
} from '../../styles/pages/home/styles';
import { Button } from '../components/Global/Button';
import { Input } from '../components/Global/Input';

interface SignFormData {
    login: string;
}

export default function Home() {
    const { push } = useRouter();
    const { register, handleSubmit } = useForm();
    const [users, setUsers] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => setUsers(json));
    console.log(users);
    {
        const handleSignIn = users.map(user => user.email);
        if (handleSignIn.includes(register)) {
            push('/Feed');
        }
    }

    return (
        <Container>
            <LoginBox>
                <LoginForm onSubmit={handleSubmit(handleSignIn)}>
                    <LoginFormTitle>Login</LoginFormTitle>
                    <Input
                        name="login"
                        placeholder="Insira seu email ou nome de usuário"
                        label="Email ou Nome de Usuário"
                        register={register}
                        required
                    />

                    <Button type="submit">Login</Button>
                </LoginForm>
            </LoginBox>
        </Container>
    );
}
