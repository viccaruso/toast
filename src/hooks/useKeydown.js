import React from 'react';

function useKeydown(eventCodes, callback) {
  return React.useEffect(() => {
    function handleKeydown(event) {
      if (eventCodes.includes(event.code)) {
        callback(event);
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [eventCodes, callback]);
}
export default useKeydown;
