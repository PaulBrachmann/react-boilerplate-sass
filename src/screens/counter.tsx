import React, { useCallback } from "react";

import { StoreProps, withStore } from "../app";

// tslint:disable-next-line no-empty-interface
export interface CounterProps {}

const Counter: React.FC<CounterProps & StoreProps> = (props) => {
  const { counter } = props.store;

  const increment = useCallback(() => {
    counter.increment();
  }, [counter]);

  return <button onClick={increment}>{counter.value}</button>;
};

export default withStore(Counter);
