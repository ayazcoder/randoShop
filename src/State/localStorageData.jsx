
export function localStorageData(value) {
      
    let localData = JSON.parse(localStorage.getItem(value));
  
    return localData;
  }