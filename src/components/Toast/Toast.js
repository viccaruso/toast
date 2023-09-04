import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: <Info size={24} />,
  warning: <AlertTriangle size={24} />,
  success: <CheckCircle size={24} />,
  error: <AlertOctagon size={24} />,
};

function Toast({ message, variant }) {
  return (
    <div className={`${styles.toast} ${styles.notice}`}>
      <div className={styles.iconContainer}></div>
      {ICONS_BY_VARIANT[variant]}
      <p className={styles.content}>{message}</p>
      <button className={styles.closeButton}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
