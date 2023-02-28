import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({ children })  => {
    const [user] = useState({
        name:"Jhon carl Gwapo",
        email:"jhon@gmail.com",
        dob: "10/18/00",
    });
    return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);