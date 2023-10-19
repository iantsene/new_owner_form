import React, { createContext, useContext, useState } from 'react';
import INITIAL_DATA from './variables';

const DataContext = createContext({});

export function DataProvider({ children }) {
  const [data, setData] = useState(INITIAL_DATA); // INITIAL_DATA should be defined in your code

  const contextValue = {
    data,
    setData,
  };

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
}

export function useData() {
  return useContext(DataContext);
}
