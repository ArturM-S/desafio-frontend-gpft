import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../contexts/AuthContext';
import { usePosts } from '../../../hooks/usePosts';
import {
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

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(res => res.json())
            .then(comments => {
                setCommentsDta(comments);
            })
            .catch(err => console.log(err));
    }, [postId]);

    return (
        <div>
            {isAuthenticated ? (
                <>
                    <Container isContainerOpen={isContainerOpen}>
                        <Title>Feed:</Title>
                        <Button onClick={() => push('/CreatePost')}>
                            Criar post
                        </Button>
                        {data?.map(post => (
                            <Post key={post.id}>
                                <PostAuthor>Autor: {post.userId}</PostAuthor>
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
