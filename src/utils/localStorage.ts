interface UserState {
  user: Record<string, unknown>[];  //�んกำหนด type �ん่�んตามข้อมูล�ん
}

const isServer = typeof window === 'undefined';

export const loadState = (): UserState | undefined => {
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

export const saveState = (state: UserState): void => {
  if (isServer) return;
  
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("userState", serializedState);
  } catch (e) {
    console.warn("Failed to save to localStorage", e);
  }
};
