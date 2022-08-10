import { useState, useEffect } from 'react';

const useLocalStorage = key => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? [];
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
export default useLocalStorage;
