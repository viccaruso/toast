import React from 'react';
import { ToastContext } from '../ToastProvider/ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, dismissAll } = React.useContext(ToastContext);

  React.useEffect(() => {
    function handleEscape() {
      dismissAll();
    }
    window.addEventListener('keydown', handleEscape);
  }, []);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast type={toast.type} id={toast.id}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
