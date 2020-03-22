import { createContext, ContextProvider } from 'react';

const ApplicationContext = createContext({
  isChalkboardTheme: true,
  setChalkboardTheme: () => {},
});

export default ApplicationContext;
