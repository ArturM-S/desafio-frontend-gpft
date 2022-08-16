import { createContext, useState } from 'react';

type ISignInData = {
    login: string;
    password: string;
};

interface AuthContextData {
    signIn: (credentials: ISignInData) => Promise<void>;
    signOut: () => void;
    isLoading: boolean;
    isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const signIn = async (credentials: ISignInData) => {
        useEffect(() => {
            fetch('https://fakestoreapi.com/products/category/electronics')
                .then(res => res.json())
                .then(json => setElectronics(json));
        }, []);
        setIsLoading(true);
        setIsAuthenticated(true);
        setIsLoading(false);
    };
    const signOut = () => {
        setIsAuthenticated(false);
    };
    return (
        <AuthContext.Provider
            value={{ signIn, signOut, isLoading, isAuthenticated }}
        >
            {children}
        </AuthContext.Provider>
    );
};
