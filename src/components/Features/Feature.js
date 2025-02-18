import React from "react";
import "./Feature.css";
import { features } from "./featureList";
function Feature() {
  return (
    <div className="features">
      <div className="container">
        <h2 className="text-center">Why Join Us?</h2>
        <p className="text-center features-p">Navigate through the stages of becoming a proficient developer</p>
        <div className="row">
          {features.map((feature) => {
            return (
              <div className="col-lg-6" key={feature.id}>
                <div className="row mb-2">
                  <div className="col-1 icon"><span>{feature.icon}</span></div>
                  <div className="col-10">
                    <h4>{feature.title}</h4>
                    <p className="feature-p">
                      {feature.content}
                    </p>
                    <p className="func">{feature.func}</p>
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

export default Feature;
