import React from 'react';
import { ToastContext } from '../ToastProvider/ToastProvider';
import Button from '../Button';
import ToastShelf from '../ToastShelf/ToastShelf';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [type, setType] = React.useState('notice');
  const { createToast } = React.useContext(ToastContext);

  function handleSubmit(event) {
    event.preventDefault();
    createToast({ message, type });
    setMessage('');
    setType('notice');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <form onSubmit={handleSubmit}>
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
                    checked={type === variant}
                    onChange={(event) => setType(event.target.value)}
                  />
                  {variant}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
      <ToastShelf />
    </div>
  );
}

export default ToastPlayground;
