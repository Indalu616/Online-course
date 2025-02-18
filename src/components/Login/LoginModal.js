import { useState } from "react";
import {signInWithEmailAndPassword } from "firebase/auth";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./LoginModal.css";
import { auth } from "../../firebaseConfig";
import {useNavigate } from "react-router-dom";
function LoginModal() {

const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ! a function to sign in user

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        navigate("/Online-course/dashboard")
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="login-modal">
      <Button onClick={handleShow} style={{ color: "black" }}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="connection_info_box">
            <p
              style={{ color: "white", lineHeight: "2.5" }}
              className="border-bottom"
            >
              Sign in for unlimited access
              {/* Login to gain exclusive access to resources, premium courses,
              and a thriving network of developers. */}
            </p>
            <div className="form_box">
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="password"
                  placeholder="*******"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <button onClick={signInUser}>
                Sign In{" "}
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LoginModal;
