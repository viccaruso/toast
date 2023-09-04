import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.type}>{toast.message}</Toast>
        </li>
      ))}
      <li className={styles.toastWrapper}>
        <Toast variant="error">Example error toast</Toast>
      </li>
    </ol>
  );
}

export default ToastShelf;
