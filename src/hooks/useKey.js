import * as React from "react";

const keyContext = React.createContext();

function useKey() {
  const [key, setKey] = React.useState(false);

  return {
    key,
    getKey() {
      return new Promise((res) => {
        setKey(true);
        res();
      });
    },
    nullKey() {
      return new Promise((res) => {
        setKey(false);
        res();
      });
    },
  };
}

export function KeyProvider({ children }) {
  const key = useKey();
  return <keyContext.Provider value={key}>{children}</keyContext.Provider>;
}

export default function KeyConsumer() {
  return React.useContext(keyContext);
}
