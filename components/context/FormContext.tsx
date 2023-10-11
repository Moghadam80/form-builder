"use client";

import { ReactNode, Dispatch, SetStateAction, createContext, useState } from "react";

type FormContextType = {
    id: number;
    setId: Dispatch<SetStateAction<number>>;
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    description: string;
    setDescription: Dispatch<SetStateAction<string>>;

};


export const FormContext = createContext<FormContextType| null>(null);

export default function FormContextProvider({ children }: { children: ReactNode }) {
    const [id,setId] = useState(0);
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');

  return (
    <FormContext.Provider
      value={{
        id,
        setId,
        name,
        setName,
        description,
        setDescription
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
