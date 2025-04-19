const isServer = typeof window === 'undefined';

export const loadState = () => {
  if (isServer) return undefined;
  
  try {
    const serializedState = localStorage.getItem("userState");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Failed to load from localStorage", e);
    return undefined;
  }
};

export const saveState = (state: any) => {
  if (isServer) return;
  
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("userState", serializedState);
  } catch (e) {
    console.warn("Failed to save to localStorage", e);
  }
};
