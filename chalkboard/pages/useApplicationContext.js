import { useContext } from 'react';
import ApplicationContext from './ApplicationContext';

export default function useApplicationContext() {
  const context = useContext(ApplicationContext);

  return context;
}
