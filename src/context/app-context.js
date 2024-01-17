import { createContext } from 'react';

export const AppContext = createContext({
  choice: "Home",
  setChoice: () => {}
});

