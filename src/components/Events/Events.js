import React from "react";
import "./Events.css";
import { events } from "./Eventlist";
import RegisterModal from "../RegisterModal/RegisterModal";
function Events() {
  return (
    <div className="event">
      <div className="container">
        <h2>Upcoming Events</h2>
        <div className="row">
          {events.map((event) => {
            return (
              <div className="col-md-6 col-lg-3 p-2" key={event.id}>
                <div className="event-box">
                  <div className="event-poster">
                    <img
                      src={event.im_url}
                      alt="poster"
                      className="img-fluid"
                      style={{
                        height: "200px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="event-info">
                  <div className="free">
                    Free
                  </div>
                    <h3>{event.title}</h3>
                    <p style={{ marginBottom: "0" }}>
                      <span>
                        <i
                          className="fa-regular fa-calendar"
                          style={{ marginRight: "10px" }}
                        ></i>
                      </span>
                      Monday 10,2025
                    </p>
                    <p style={{ marginBottom: "0" }}>
                      <span style={{ marginRight: "10px" }}>
                        <i className="fa-solid fa-users"></i>
                      </span>
                      Attendees: {event.participants}
                    </p>
                    <p style={{ marginBottom: "0" }}>
                      <span style={{ marginRight: "10px" }}>
                        <i className="fa-regular fa-user"></i>
                      </span>
                      Organized by:{" "}
                      <span style={{ marginLeft: "10px" }}>
                        {event.presenter}
                      </span>
                    </p>
                  </div>
                  <div className="register-btn">
                    <RegisterModal name={event.title}/>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Events;
