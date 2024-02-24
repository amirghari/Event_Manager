// import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
// import { login } from '../services/authService';

// interface User {
//     email: string;
//     name: string;
// }

// interface AuthContextType {
//     user: User | null;
//     loginUser: (email: string, password: string) => Promise<void>;
//     logoutUser: () => void;
//     isAuthenticated: () => boolean;
//     isLoading: boolean;
//     setUser: (user: User | null) => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = (): AuthContextType => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// };

// interface AuthProviderProps {
//     children: ReactNode;
// }

// export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
//     const [user, setUser] = useState<User | null>(null);
//     const [isLoading, setIsLoading] = useState<boolean>(true);

//     useEffect(() => {
//         const userFromSessionStorage = sessionStorage.getItem('user');
//         if (userFromSessionStorage) {
//             setUser(JSON.parse(userFromSessionStorage) as User); // Type assertion here
//         }
//         setIsLoading(false);
//     }, []);

//     const loginUser = async (email: string, password: string): Promise<void> => {
//         try {
//             const data = await login(email, password);
//             sessionStorage.setItem('token', data.token);
//             sessionStorage.setItem('user', JSON.stringify(data.user));
//             setUser(data.user);
//             // Redirect or handle login success as per your app's logic
//         } catch (error) {
//             console.error('Login error:', error);
//             throw error;
//         }
//     };

//     const logoutUser = (): void => {
//         sessionStorage.removeItem('token');
//         sessionStorage.removeItem('user');
//         setUser(null);
//         // Redirect or handle logout as per your app's logic
//     };

//     const isAuthenticated = (): boolean => {
//         return user !== null;
//     };

//     const authContextValue: AuthContextType = {
//         user,
//         loginUser,
//         logoutUser,
//         isAuthenticated,
//         isLoading,
//         setUser, // Include setUser here
//     };

//     return (
//         <AuthContext.Provider value={authContextValue}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { login } from '../services/authService';

interface User {
    token: string;
    email: string;
    name: string;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    loginUser: (email: string, password: string) => Promise<void>;
    logoutUser: () => void;
    isAuthenticated: () => boolean;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    // if (!context) {
    //     throw new Error('useAuth must be used within an AuthProvider');
    // }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const userFromSession = sessionStorage.getItem('user');
        if (userFromSession) {
            setUser(JSON.parse(userFromSession));
        }
        setIsLoading(false);
    }, []);

    const loginUser = async (email: string, password: string) => {
        try {
            const data = await login(email, password);
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('user', JSON.stringify(data.user));
            setUser(data);
            window.location.reload();
            window.location.href = '/login';
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const logoutUser = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        setUser(null);
        window.location.reload();
    };

    const isAuthenticated = () => {
        return user !== null;
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                loginUser,
                logoutUser,
                isAuthenticated,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
