import { useState, React } from "react";
import Modal from './Modal';
import Button from "./Button";

const Form = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShow = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (
        <div className="container d-flex justify-content-center align-items-center px-3 py-2">
            <div className="col-md-6">
                <form className="p-4 border rounded shadow bg-light">
                    <h2 className="text-center mb-4">Say My Name</h2>

                    <div className="form-group">
                        <label htmlFor="name" className="fw-bold">Name</label>
                        <input type="text" className="form-control form-control-lg" id="name" placeholder="Enter my name correctly" />
                    </div>

                    <div className="form-group mt-3">
                        <label htmlFor="message" className="fw-bold">Message</label>
                        <textarea className="form-control form-control-lg" id="message" rows="3" placeholder="Write your message"></textarea>
                    </div>

                    <div className="mt-4">
                        <Button variant="primary" text="Submit" onClick={handleShow} className="btn btn-primary w-100" />
                    </div>

                    <Modal show={showModal} handleClose={handleClose} />
                </form>
            </div>
        </div>
    );
};

export default Form;