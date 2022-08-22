import { useState } from 'react';
import { useQuery } from 'react-query';

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type GetPostsResponse = {
    find(arg0: (post: any) => boolean): any;
    map(arg0: (post: any) => JSX.Element): import('react').ReactNode;
    posts: Post[];
};

export async function getPosts(
    userId: number,
    id: number,
    title: string,
    body: string,
): Promise<GetPostsResponse> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

export function usePosts(
    userId?: number,
    id?: number,
    title?: string,
    body?: string,
) {
    return useQuery(['posts'], () => getPosts(userId, id, title, body), {
        staleTime: 60000, // 1 minute
    });
}
