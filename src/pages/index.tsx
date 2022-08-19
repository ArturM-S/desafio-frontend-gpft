import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../contexts/AuthContext';
import {
    Container,
    LoginBox,
    LoginForm,
    LoginFormTitle,
} from '../../styles/pages/home/styles';
import { Button } from '../components/Global/Button';
import { Input } from '../components/Global/Input';

export default function Home() {
    const { register, handleSubmit } = useForm();
    const [login, setLogin] = useState('');
    const { signIn } = useContext(AuthContext);

    const onSubmit = () => signIn({ login });

    return (
        <Container>
            <LoginFormTitle>Login</LoginFormTitle>
            <LoginBox>
                <LoginForm onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        name="login"
                        type="email"
                        placeholder="Insira seu email"
                        label="Email"
                        onChange={e => setLogin(e.target.value)}
                        register={register}
                        required
                    />

                    <Button type="submit">Entrar</Button>
                </LoginForm>
            </LoginBox>
        </Container>
    );
}
