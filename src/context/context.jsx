import React, { createContext, useState,useEffect } from "react";
import api from "../Services/api"

const IndexContext = createContext();

export default function IndexProvider({ children }) {
  
  const[ modulos, setModulos] = useState([])

  useEffect(async() => {
    try {

      const res = await api.get('/contagem')
      console.log(res.data)
    } catch (error) {
    console.log(error)
    }

  },[]);

  return (
    <IndexContext.Provider
      value={{
        modulos,
      }}
    >
      {children}
    </IndexContext.Provider>
  );
}
