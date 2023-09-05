import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [activeToasts, setActiveToasts] = React.useState([]);

  function createToast({ message, type }) {
    const newToast = {
      id: crypto.randomUUID(),
      message: message,
      type: toastVariant,
    };
    setActiveToasts([...activeToasts, newToast]);
  }

  function dismissToast(id) {
    const newToasts = activeToasts.filter((toast) => toast.id !== id);
    setActiveToasts(newToasts);
  }

  return (
    <ToastContext.Provider value={{ activeToasts, createToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
