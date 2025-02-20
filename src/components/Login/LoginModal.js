import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./LoginModal.css";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import BasicAlerts from "../Alerts/Alert";
import { CircularProgress } from "@mui/material";
function LoginModal() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ! a function to sign in user

  const signInUser = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        navigate("/Online-course/dashboard");
        const user = userCredential.user;
        setIsLoading(false);
        setSuccess(true);
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        setIsLoading(false)
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
              {error && <BasicAlerts message={error} />}
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button onClick={signInUser}>
                {isLoading ? (
                  <CircularProgress size={30} />
                ) : (
                  <div>
                    {" "}
                    Sign In{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LoginModal;
