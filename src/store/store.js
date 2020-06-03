import React, { useContext, useState, useMemo } from "react";

function makeStore() {
  const context = React.createContext();

  const Provider = ({ initialValue = {}, children }) => {
    const [state, setState] = useState(initialValue);
    const contextValue = useMemo(() => [state, setState], [state]);
    return <context.Provider value={contextValue}>{children}</context.Provider>;
  };

  const useStore = statePart => {
    const [state, setState] = useContext(context);

    if (statePart) {
      const customSetState = newStateValue => {

        if (typeof newStateValue === "function") {
          setState(prevState => ({ ...prevState, [statePart]: newStateValue(prevState[statePart]) }));
        } else {
          setState(prevState => ({ ...prevState, [statePart]: { ...newStateValue } }));
        }
      };
      return [state[statePart], customSetState];

    } else {
      return [state, setState];
    }
  };

  return { Provider, useStore };
}

export const { Provider, useStore } = makeStore();
