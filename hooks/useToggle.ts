import { useCallback, useState } from 'react';

const useToggle = (defaultState: boolean = false) => {
  const [active, setActive] = useState(defaultState);

  const toggle = useCallback(() => {
    setActive(!active);
  }, [active]);

  return { active, toggle };
};

export default useToggle;
