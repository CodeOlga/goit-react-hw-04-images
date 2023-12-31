import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({onClose, children}) => {

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') onClose()
  }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [onClose])

const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

    return (
      createPortal(
        <div className={css.overlay} onClick={handleBackdropClick}>
        <div className={css.modal}>{children}</div>
        </div>,
        modalRoot,
    )
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal;



