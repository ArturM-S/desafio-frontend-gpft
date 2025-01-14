import { useQuery } from 'react-query';

type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

type GetCommentsResponse = {
    comments: Comment[];
};

export async function getComments(
    postId: number,
): Promise<GetCommentsResponse> {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
    );
    const comments = await response.json();
    return comments;
}

export function useComments(postId?: number) {
    return useQuery(['comments'], () => getComments(postId), {
        staleTime: 60000, // 1 minute
    });
}
