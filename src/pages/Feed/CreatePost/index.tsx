import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    Container,
    PostForm,
} from '../../../../styles/pages/CreatePost/styles';
import { Title } from '../../../../styles/styles';
import { Button } from '../../../components/Global/Button';
import { Input } from '../../../components/Global/Input';
import { AuthContext } from '../../../contexts/AuthContext';

export default function CreatePost() {
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);
    const { register, handleSubmit } = useForm();
    const { username, loggedUser } = useContext(AuthContext);
    console.log(username);

    const formData = {
        title,
        body,
        userId: loggedUser.id,
    };

    const onSubmit = async () => {
        if (formData) {
            await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    formData,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(response => response.json())
                .then(json => console.log(json));
            alert('Post criado com sucesso');
        } else {
            alert('Preencha todos os campos');
        }
    };

    return (
        <Container>
            <Title>Criação de post:</Title>
            <PostForm onSubmit={handleSubmit(onSubmit)}>
                <Input
                    minLength={3}
                    name="title"
                    type="text"
                    placeholder="Minimum 3 characters"
                    label="Título"
                    register={register}
                    required
                    onChange={e => setTitle(e.target.value)}
                />
                <Input
                    minLength={3}
                    name="body"
                    type="text"
                    placeholder="Minimum 3 characters"
                    label="Descrição"
                    register={register}
                    required
                    onChange={e => setBody(e.target.value)}
                />

                <Button type="submit">Submit</Button>
            </PostForm>
        </Container>
    );
}
