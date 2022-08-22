import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../contexts/AuthContext';
import { usePosts } from '../../../hooks/usePosts';
import {
    AutorInfoContainer,
    CommentBody,
    CommentContent,
    CommentEmail,
    CommentName,
    CommentsModal,
    Container,
    Post,
    PostAuthor,
    PostBody,
    PostTitle,
    PostUser,
} from '../../../styles/pages/Feed/styles';
import { Button } from '../../components/Global/Button';
import { Title } from '../../../styles/styles';

export default function Feed() {
    const { isAuthenticated } = useContext(AuthContext);
    const { data } = usePosts();
    const [postId, setPostId] = useState(null);
    const [commentsData, setCommentsDta] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isContainerOpen, setIsContainerOpen] = useState(true);
    const { push } = useRouter();
    const [postAuthor, setPostAuthor] = useState(null);
    const [postUsername, setPostUsername] = useState(null);
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(res => res.json())
            .then(comments => {
                setCommentsDta(comments);
            })
            .catch(err => console.log(err));
    }, [postId]);

    useEffect(() => {
        async function getPostAuthor() {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${postUsername}`,
            );
            const postAuthorData = await response.json();
            setPostAuthor(postAuthorData);
        }
        getPostAuthor();
    }, [postUsername]);

    return (
        <div>
            {isAuthenticated ? (
                <>
                    <Container isContainerOpen={isContainerOpen}>
                        <Title>Feed:</Title>
                        <Button onClick={() => push('/Feed/CreatePost')}>
                            Criar post
                        </Button>
                        {data?.map(post => (
                            <Post key={post.id}>
                                <PostUser
                                    onClick={() => {
                                        setPostUsername(post.userId);
                                        setShowInfo(!showInfo);
                                    }}
                                >
                                    <Button>Informações do usuário</Button>
                                    <AutorInfoContainer isShowInfo={showInfo}>
                                        <PostAuthor>
                                            Nome: {postAuthor?.username}
                                            <br />
                                            Email: {postAuthor?.email}
                                            <br />
                                            <Button
                                                onClick={() => {
                                                    setShowInfo(!showInfo);
                                                }}
                                            >
                                                Fechar
                                            </Button>
                                        </PostAuthor>
                                    </AutorInfoContainer>
                                </PostUser>
                                <PostTitle>{post.title}</PostTitle>
                                <PostBody>{post.body}</PostBody>
                                <Button
                                    type="button"
                                    onClick={() => {
                                        setPostId(post.id);
                                        setIsModalOpen(true);
                                        setIsContainerOpen(false);
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    comentários
                                </Button>
                            </Post>
                        ))}
                    </Container>
                    <CommentsModal isModalOpen={isModalOpen}>
                        <Button
                            type="button"
                            onClick={() => {
                                setIsModalOpen(false);
                                setIsContainerOpen(true);
                            }}
                        >
                            fechar
                        </Button>
                        <h1>Comentários:</h1>
                        {commentsData.map(comment => (
                            <CommentContent key={comment.id}>
                                <CommentEmail>
                                    Email:
                                    <br />
                                    {comment.email}
                                </CommentEmail>
                                <CommentName>
                                    Nome:
                                    <br />
                                    {comment.name}
                                </CommentName>
                                <CommentBody>
                                    Comentário:
                                    <br />
                                    {comment.body}
                                </CommentBody>
                            </CommentContent>
                        ))}
                    </CommentsModal>
                </>
            ) : (
                <Title>Permissão negada</Title>
            )}
        </div>
    );
}
