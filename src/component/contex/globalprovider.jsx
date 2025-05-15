import { createContext, useState } from "react";

export const GlobalContex = createContext();

export const GlobalContexProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);


    return (
        <GlobalContex.Provider value={{ loading, setLoading }}>
            {children}
        </GlobalContex.Provider>
    );
};