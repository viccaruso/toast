import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  useEscapeKey(dismissAll);

  function createToast({ message, type }) {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      type,
    };
    setToasts([...toasts, newToast]);
  }

  function dismissAll() {
    setToasts([]);
  }

  function dismissToast(id) {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  }

  return (
    <ToastContext.Provider
      value={{ toasts, createToast, dismissToast, dismissAll }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
