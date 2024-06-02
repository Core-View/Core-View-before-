import React from 'react';
import './my_alram.css'; // 모달 스타일을 위한 CSS

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className="close-btn">닫기</button>
      </div>
    </div>
  );
};

export default Modal;
