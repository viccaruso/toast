import React from 'react';
import useKeydown from '../../hooks/useKeydown';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleKeydown = React.useCallback(() => setToasts([]), []);

  useKeydown(['Escape', 'KeyX'], handleKeydown);

  function createToast({ message, type }) {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      type,
    };
    setToasts([...toasts, newToast]);
  }

  function dismissToast(id) {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  }

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
