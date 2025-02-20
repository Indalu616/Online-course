import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./RegisterModal.css";
import { Button, Typography } from "@mui/material";
function RegisterModal({name}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="registration-page">
    
      <Button onClick={handleShow} fontSize="small">
        Register Free
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="user_registration_section">
            <h3>Secure your place</h3>
            <div class="mb-3">
              <label for="name" class="form-label label">
                Full Name
              </label>
              <input
                type="text"
                class=" input form-control "
                id="name"
                placeholder="Your full name"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label label">
                Email address
              </label>
              <input
                type="email"
                class="input form-control "
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label label">
                Phone Number
              </label>
              <input
                type="tel"
                class=" input form-control "
                id="phone"
                placeholder="+971509223870"
              />
            </div>
            <button>Register</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default RegisterModal;
