/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const EditContext = createContext();
export const ContextProvider = ({ children }) => {
  const [activeEditId, setActiveEditId] = useState(null);
  const handleEdit = (id) => {
    setActiveEditId((prevId) => (prevId === id ? null : id));
  };
  return (
    <EditContext.Provider value={{ activeEditId, handleEdit }}>
      {children}
    </EditContext.Provider>
  );
};

export const UseEditContext = () => useContext(EditContext);
