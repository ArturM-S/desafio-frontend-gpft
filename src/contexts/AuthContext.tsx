/* eslint-disable react/jsx-no-constructed-context-values */
import { useRouter } from 'next/router';
import { createContext, ReactNode, useEffect, useState } from 'react';

type ISignInData = {
    login: string;
};

interface AuthContextData {
    signIn: (credentials: ISignInData) => Promise<void>;
    isLoading: boolean;
    isAuthenticated: boolean;
    permission: boolean;
    username: string;
    loggedUser: {
        email: string;
        id: number;
        name: string;
        phone: string;
        username: string;
        website: string;
    };
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const { push } = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [users, setUsers] = useState([]);
    const [permission, setPermission] = useState(false);
    const [username, setUsername] = useState('');
    const [loggedUser, setLoggedUser] = useState({});

    const signIn = async (credentials: ISignInData) => {
        setIsLoading(true);

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => setUsers(json));
        setUsername(credentials.login);

        if (users.map(user => user.email).includes(credentials.login)) {
            push('/Feed');
            setIsAuthenticated(true);
        } else {
            alert('Usuário não encontrado');
        }
        setIsAuthenticated(true);
        setIsLoading(false);
    };

    useEffect(() => {
        const saveUserCredentials = async () => {
            setLoggedUser(users.find(user => user.email === username));
        };
        saveUserCredentials();
        console.log(loggedUser);

        const handlePermission = async (login: string) => {
            if (login.includes('.tv')) {
                setPermission(true);
            } else {
                setPermission(false);
            }
        };
        handlePermission(username);
    }, [users, username]);
    return (
        <AuthContext.Provider
            value={{
                signIn,
                isLoading,
                isAuthenticated,
                permission,
                username,
                loggedUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
