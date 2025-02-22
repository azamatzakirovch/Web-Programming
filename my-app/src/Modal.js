const Modal = ({ show, handleClose }) => (
    <>
        {show && <div className="modal-backdrop fade show"></div>} {/* Backdrop behind the modal */}

        <div className={`modal ${show ? 'show d-block' : 'd-none'}`} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-success fw-bold">You Found!</h5>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body text-center">
                        <p>You Are Right. Soon We will review your message and reply it asap</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary w-100" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Modal;