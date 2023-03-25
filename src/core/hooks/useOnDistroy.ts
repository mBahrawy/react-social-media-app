import { useEffect } from "react";

const useOnDistroy = (callback: () => void) => {
  useEffect(() => {
    return () => {
      return callback && callback();
    };
  }, []);
};

export default useOnDistroy;
