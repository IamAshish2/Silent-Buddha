
import { router } from "expo-router";
import { User } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";

// type User = {
//   email: string;
//   password: string;
// }

interface UserContextInterface {
  user: User,
  setIsLoggedIn: (isLoggedIn: boolean) => void,
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>
  // setUser: Dispatch<React.SetStateAction<User>>
}

// const defaultState = {
//   user: {
//     email: '',
//     password: ''
//   },
// setIsLoggedIn: () => {},

//   // setUser: (user: User) => { }
// } as UserContextInterface;

export const AuthContext = createContext<Partial<UserContextInterface>>({});

// export const AuthContext = createContext<UserContextInterface>(defaultState);

type UserProviderProps = {
  children: ReactNode
}
export default function UserProvider({ children }: UserProviderProps) {
  // const [user, setUser] = useState<User>({
  //   email: '',
  //   password: ''
  // });
  const [user, setUser] = useState<User>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    console.log(user);

    if (!user) {
      router.push('/login');
    }

  }, [user]);
  return (
    <AuthContext.Provider value={{ setIsLoggedIn, setUser, user }}>
      {children}
    </AuthContext.Provider>
  )
}
