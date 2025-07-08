"use client";

import { useEffect } from "react";

export const Modal = ({ isOpen, onClose, children, size = "md" }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizes = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        className={`relative bg-white rounded-xl shadow-2xl ${sizes[size]} w-full transform transition-all duration-200 scale-100`}
      >
        {children}
      </div>
    </div>
  );
};
Modal.displayName = "Modal";
// This component renders a modal dialog with a backdrop. It listens for the Escape key to close the modal and prevents body scrolling when the modal is open.
// The `size` prop controls the maximum width of the modal, with options for small, medium, and large sizes.
// The `children` prop allows you to pass any content you want to display inside the modal.
// The modal is only rendered when `isOpen` is true, and clicking the backdrop will close the modal by calling `onClose`.
// The `useEffect` hook is used to manage event listeners and body styles when the modal opens or closes.
