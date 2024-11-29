import "./Modal.css";

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button onClick={onClose} className="close-button">
            ×
          </button>
        </div>

        {/* Content */}
        <div className="modal-content">{children}</div>

        {/* Footer */}
        <div className="modal-footer">
          <button onClick={onClose} className="modal-button">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
