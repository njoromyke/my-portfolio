import { createContext } from "react";

type DefaultGlobalState = {
  isMenuOpen: boolean;
};

type GlobalContextType = {
  globalState: DefaultGlobalState;
  updateGlobalState: (obj: any) => void;
};

export const GlobalContext = createContext<GlobalContextType>({
  globalState: {
    isMenuOpen: false,
  },
  updateGlobalState: (obj: any) => {},
});

export const DEFAULT_GLOBAL_STATE: DefaultGlobalState = {
  isMenuOpen: false,
};
