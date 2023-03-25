import { useEffect } from "react";

const useOnDistroy = (callback: () => any) => {
  useEffect(() => {
    return () => {
      return callback && callback();
    };
  }, []);
};

export default useOnDistroy;
