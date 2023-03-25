interface StorageHelpers {
  getStorageValue: <Value>(key: string) => Value;
  addStorageValue: (key: string, value: any) => void;
  removeStorageValue: (key: string) => void;
}

export const getStorageValue = <Value>(key: string): Value => {
  const value = localStorage[key];

  if (value) {
    return JSON.parse(value);
  }

  return value;
};

export const addStorageValue = (key: string, value: any): void => {
  localStorage[key] = JSON.stringify(value);
};

const useStorage = (): StorageHelpers => {
  const removeStorageValue = (key: string): void => {
    localStorage.removeItem(key);
  };

  return {
    getStorageValue,
    addStorageValue,
    removeStorageValue,
  };
};

export default useStorage;
