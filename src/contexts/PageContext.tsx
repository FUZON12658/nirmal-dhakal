"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface PageContextType {
  selected: number;
  setSelected: (index: number) => void;
  options: string[];
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error("usePageContext must be used within a PageProvider");
  }
  return context;
};

interface PageProviderProps {
  children: ReactNode;
}

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [selected, setSelected] = useState(0);
  const options = ["Welcome", "Social Life", "Personal Life"];

  return (
    <PageContext.Provider value={{ selected, setSelected, options }}>
      {children}
    </PageContext.Provider>
  );
};
