import React from "react";
import "./Community.css";
import qr from "../../images/qr_code.png";
function Community() {
  return (
    <div className="community">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-3">
            <h2>Join The ADUDC Community</h2>
            <p>
              Join Abu Dhabi University's vibrant developer network. Scan the QR
              code to instantly connect and start your journey!
            </p>
            <button>Join Now</button>
          </div>
          <div className="col-md-6 mt-3">
            <div className="qr_code ">
              <img src={qr} alt="qr_code" className="img-fluid" style={{height:"200px"}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
