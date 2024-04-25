import React, {
  useState,
  useContext,
  createContext,
  FC,
  Dispatch,
} from "react";

interface ModeContextType {
  lm: boolean;
  setLm: Dispatch<boolean>;
}

const ModeContext = createContext({} as ModeContextType);
const ModeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lm, setLm] = useState<boolean>(true);

  return (
    <ModeContext.Provider value={{ lm, setLm }}>
      {children}
    </ModeContext.Provider>
  );
};

// custom hook
const useMode = () => useContext(ModeContext);

export { useMode, ModeProvider };
