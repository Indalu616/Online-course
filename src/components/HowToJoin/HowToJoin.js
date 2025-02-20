import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./HowToJoin.css";
import { auth } from "../../firebaseConfig";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import BasicAlerts from "../Alerts/Alert";
import SuccessMessage from "../Alerts/Success";
function HowToJoin() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success,setSuccess]=useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // !a function to register user

  const registerUser = async () => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setIsLoading(false);
        setSuccess(true)
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        setIsLoading(false);
        setSuccess(false)
        // ..
      });
  };
  return (
    <div className="join_community">
      <div className="container">
        <h2 className="text-center">How To Join Our Community</h2>
        <p className="text-center">
          Connect with like-minded peers and become part of a vibrant developer
          network at ADUDC.
        </p>
        <div className="connection_container">
          <div className="connection_info_box">
            <div className="over-lay">1</div>
            <h3>Register for Membership</h3>
            <p>
              Sign up to gain exclusive access to resources, premium courses,
              and a thriving network of developers.
            </p>
            <div className="form_box">
              {error && <BasicAlerts message={error} />}
              {success&& <SuccessMessage message={"Account created"} />}
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
                <label for="studentID" class="form-label">
                  Student ID
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="studentID"
                  placeholder="1093915"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="*******"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button onClick={registerUser}>
                {isLoading ? (
                  <CircularProgress size={30}/>
                ) :<div>Create Account<span>
                <i className="fa-solid fa-arrow-right"></i>
              </span></div>
                  
                }{" "}
              </button>
            </div>
          </div>
          {/* !next */}
          <div className="connection_info_box">
            <div className="over-lay">2</div>
            <h3>Connect With Developers</h3>
            <p>
              Join our active discussions on LinkedIn, Telegram, and GitHub to
              network with like-minded individuals.
            </p>
            <div className="social_links">
              <button>LinkedIn </button>
              <button>Telegram </button>
              <button>GitHub </button>
            </div>
          </div>
          {/* third */}
          <div className="connection_info_box">
            <div className="over-lay">3</div>
            <h3> Join Organizer's Team</h3>
            <p>Be part of shaping the future of our community.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToJoin;
