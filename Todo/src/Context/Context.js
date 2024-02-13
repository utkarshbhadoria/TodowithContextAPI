import { createContext , useContext } from "react";
 
export const context  =createContext([{

}])

export const TodoContext = (context) => {
    return useContext(context)

}