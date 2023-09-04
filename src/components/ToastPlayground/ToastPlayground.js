import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf/ToastShelf';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [toastVariant, setToastVariant] = React.useState('notice');
  const [isShown, setIsShown] = React.useState(false);
  const [activeToasts, setActiveToasts] = React.useState([]);

  function handleDismiss() {
    setIsShown(!isShown);
  }

  function createToast() {
    const newToast = {
      id: crypto.randomUUID(),
      message: message,
      type: toastVariant,
    };
    setActiveToasts([...activeToasts, newToast]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => (
              <label htmlFor={`variant-${variant}`} key={variant}>
                <input
                  id={`variant-${variant}`}
                  type="radio"
                  name={variant}
                  value={variant}
                  checked={toastVariant === variant}
                  onChange={(event) => setToastVariant(event.target.value)}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => createToast()}>Pop Toast!</Button>
          </div>
        </div>
      </div>
      <ToastShelf toasts={activeToasts}></ToastShelf>
    </div>
  );
}

export default ToastPlayground;
