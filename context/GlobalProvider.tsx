import { getCurrentUser } from "@/lib/appwrite";
import React, {  createContext, useContext, useEffect, useState } from "react";
import { Models } from "react-native-appwrite";



export interface GlobalContextType {
  user: Models.Document | null; 
  setUser: (user: Models.Document | null) => void; 
  isLoggedIn: boolean; 
  setIsLoggedIn: (isLoggedIn: boolean) => void; 
}


const GlobalContext = createContext<GlobalContextType | null>(null);

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider: React.FC<{children : React.ReactNode}> = ({children})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<Models.Document | null>(null)

    useEffect(() => {
    
        getCurrentUser().then(
            (res)=>{
                if(res){
                    setIsLoggedIn(true);
                    setUser(res)
                }else{
                    setIsLoggedIn(false);
                    setUser(null)
                }
            }
        ).catch(
            (err)=>{
                console.log(err);
            }
        )
      
    }, [])
    

    return (
        <GlobalContext.Provider value={{isLoggedIn,setIsLoggedIn,user,setUser}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;