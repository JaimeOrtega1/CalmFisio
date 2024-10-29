import { createContext, useContext, useEffect, useReducer } from 'react';

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    role: localStorage.getItem('Role') || null, // Corregido para que coincida con "role"
    token: localStorage.getItem('token') || null
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                role: null, // Corregido para que coincida con "role"
                token: null
            };

        case "LOGIN_SUCCESS":
            console.log("Userdata:", action.user); // Verifica los datos del usuario
            return {
                user: action.user,
                role: action.user.role || null, // Copia el rol del usuario
                token: action.token
            };

        case "LOGOUT":
            return {
                user: null,
                role: null, // Corregido para que coincida con "role"
                token: null
            };

        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        console.log("Saving to localStorage:", state);
        localStorage.setItem('user', JSON.stringify(state.user));
        localStorage.setItem('token', state.token);
        localStorage.setItem('Role', state.role); // Corregido para que coincida con "role"
    }, [state]);

    return (
        <authContext.Provider value={{ user: state.user, token: state.token, role: state.role, dispatch }}>
            {children}
        </authContext.Provider>
    );
};

// Opción para usar el contexto en otros componentes
export const useAuth = () => {
    return useContext(authContext);
};
