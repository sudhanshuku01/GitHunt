import React, { ReactNode, createContext, useContext, useState } from 'react';

type MyContextType = {
  isLoading: boolean;
  toggleLoadingMode: () => void;
};

const MyContext = createContext<MyContextType>({
  isLoading: false,
  toggleLoadingMode: () => {},
});

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

export const MyContextProvider:React.FC<{
    children: ReactNode;
}> = ({children} ) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleLoadingMode = () => {
    setIsLoading((prevMode) => !prevMode);
  };

  const contextValue: MyContextType = {
    isLoading,
    toggleLoadingMode,
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};
