import { useQuery } from 'react-query';

export async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

export function usePosts() {
    return useQuery(['posts'], () => getPosts(), {
        staleTime: 60000, // 1 minute
    });
}
