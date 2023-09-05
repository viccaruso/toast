import React from 'react';

function useKeydown(eventKeys, callback) {
  return React.useEffect(() => {
    function handleKeydown(event) {
      if (eventKeys.includes(event.key)) {
        callback();
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);
}
export default useKeydown;
