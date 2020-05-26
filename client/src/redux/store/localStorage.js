const buzzfeed = "buzzfeed";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(buzzfeed);
    if (serializedState === null) {
      return undefined;
    }

    return { buzzfeed: JSON.parse(serializedState) };
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(buzzfeed, serializedState);
    return true;
  } catch (error) {
    console.log(error);
  }
};
