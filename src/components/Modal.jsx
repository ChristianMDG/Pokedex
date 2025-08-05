import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 backdrop-blur-sm  flex justify-center items-start pt-25 px-4 style"
      onClick={onClose}
    >
      <div
        className="bg-white  text-black dark:text-white rounded-lg shadow-lg p-6 max-w-3xl w-full relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-2xl hover:text-red-500"
        >
          <i className="fas fa-xmark text-black"></i>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
