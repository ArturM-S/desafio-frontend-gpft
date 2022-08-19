import { useQuery } from 'react-query';

export async function getUsers() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
    ).then(res => res.json());
    const data = await response;
    return data;
}

export function useUsers() {
    return useQuery(['users'], () => getUsers(), {
        staleTime: 60000, // 1 minute
    });
}
