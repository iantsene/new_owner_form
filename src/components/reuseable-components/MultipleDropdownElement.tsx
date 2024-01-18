// Context to manage state
import React, { createContext, useContext, useState } from 'react';


interface MultipleDropdownContextType {
    sharedState: Record<string, string>;
    updateState: (key: string, value: string) => void;
  }

const MultipleDropdownContext = createContext<MultipleDropdownContextType>({
    sharedState: {},
    updateState: () => {},
  });;

export const useMultipleDropdownContext = () => {
  return useContext(MultipleDropdownContext);
};

// MultipleDropdownElement component
export const MultipleDropdownElement = ({ children }) => {
  const [sharedState, setSharedState] = useState({});

  const updateState = (key, value) => {
    setSharedState(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <MultipleDropdownContext.Provider value={{ sharedState, updateState }}>
      <div>
        {/* Other UI or components can go here */}
        {children}
      </div>
    </MultipleDropdownContext.Provider>
  );
};

// DropdownSelect component
export const DropdownSelect = ({ id }) => {
  const { sharedState, updateState } = useMultipleDropdownContext();
  const localState = sharedState[id] || '';

  const handleChange = event => {
    const newValue = event.target.value;
    updateState(id, newValue);
  };

  return (
    <div>
      <label htmlFor={id}>{`Dropdown ${id}`}</label>
      <select id={id} value={localState} onChange={handleChange}>
        {/* Dropdown options go here */}
      </select>
    </div>
  );
};
