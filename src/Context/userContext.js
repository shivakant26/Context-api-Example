import React, { createContext } from "react";
const userContext = createContext()

const userProvider = () =>{
    return(
        <>Context</>
    )
}

export default userProvider;