import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./Events.css";
import { events } from "./Eventlist";
import RegisterModal from "../RegisterModal/RegisterModal";
function Events() {
  return (
    <div className="event">
      <div className="container">
        <Typography variant="h5" sx={{color:"text.primary"}} style={{marginBottom:"2rem"}}>Upcoming Events</Typography>

        <div className="row">
          {events.map((event) => {
            return (
              <div className="col-md-6 col-lg-3 p-2" key={event.id}>
                <div className="event-box">
                  <Card style={{ minHeight: "350px" }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={event.im_url}
                      title={event.title}
                    />
                    <CardContent>
                      <div className="event-info">
                        <Typography
                          variant="h6"
                          sx={{ color: "text.primary", textAlign: "initial" }}
                          style={{ marginBottom: "1rem" }}
                        >
                          {event.title}
                        </Typography>

                        <Typography variant="p" sx={{ color: "text.primary" }}>
                          <Typography
                            variant="p"
                            sx={{ color: "text.primary" }}
                          >
                            <i
                              className="fa-regular fa-calendar"
                              style={{ marginRight: "10px" }}
                            ></i>
                          </Typography>
                          Monday 10,2025
                        </Typography>
                      
                      </div>
                    </CardContent>
                    <CardActions>
                      <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%"}}>
                        <RegisterModal name={event.title} />
                      </div>
                    </CardActions>
                  </Card>
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
