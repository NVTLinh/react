import React, { useContext, createContext, useState } from 'react';

// Tạo context
export const AuthContext = createContext();

// Tạo Provider
const AuthProvider = ({ children }) => {

    // logic
    const [token, setToken] = useState(''); // string
    
    const [user, setUser] = useState(null); // null | object
    // user là null -> chưa đăng nhập | Object -> đăng nhập rồi

    // Hàm đăng nhập với param là thông tin người dùng
    const login = (useData) => {
        setUser(useData);
    }

    // Hàm đăng xuất - set user thành null

    const logout = () => {
        setUser(null);
    }

    // view
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;