import { useEffect, useRef } from "react";

const useUpdate = (fn: () => void, deps: any[]) => {
  let count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
  // eslint-disable-next-line
  }, deps);
};

export { useUpdate };
