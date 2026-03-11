import { useEffect, useRef } from "react";

export function usePrev(value) {
  //1st this runs
  const ref = useRef();

  useEffect(() => {
    //3rd this runs
    ref.current = value;
  }, [value]);

  //2nd this runs
  return ref.current;
}

//it returns first . then effect gets called
