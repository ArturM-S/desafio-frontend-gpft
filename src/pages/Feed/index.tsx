import { useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from '../../contexts/AuthContext';
import { usePosts } from '../../../hooks/usePosts';
import {
    Container,
    Post,
    PostAuthor,
    PostBody,
    PostTitle,
} from '../../../styles/pages/Feed/styles';

export default function Feed() {
    const { permission } = useContext(AuthContext);
    const { data } = usePosts();

    return (
        <div>
            {permission ? (
                <Container>
                    Feed
                    {data?.map(post => (
                        <Post key={post.id} post={post}>
                            <PostAuthor>Author: {post.userId}</PostAuthor>
                            <PostTitle>{post.title}</PostTitle>
                            <PostBody>{post.body}</PostBody>
                        </Post>
                    ))}
                </Container>
            ) : (
                <h1>Permissão negada</h1>
            )}
        </div>
    );
}
