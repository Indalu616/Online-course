import React from "react";
import "./RatingAndReview.css";
function RatingAndReview() {
  const ratings = [
    {
      id: 1,
      star: 0,
      percentage: 0,
    },
    {
      id: 2,
      star: 1,
      percentage: 10,
    },
    {
      id: 3,
      star: 2,
      percentage: 12,
    },
    {
      id: 4,
      star: 3,
      percentage: 25,
    },
    {
      id: 5,
      star: 4,
      percentage: 50,
    },
    {
      id: 6,
      star: 5,
      percentage: 100,
    },
  ];
  return (
    <div className="rating-review">
      <div className="container">
        <div className="row rating-row">
          <div className="col-md-6">
            <div className="avg-rate">
              <h1>5</h1>
              <p>★ ★ ★ ★ ★</p>
            </div>
          </div>
          <div className="col-md-6">
            {ratings.map((rate) => {
              return (
                <div className="row" key={rate.id}>
                  <div className="col-2">
                    <p className="start-rate">{rate.star} stars</p>
                  </div>
                  <div className="col-8">
                    <div className="progress-bar">
                      <div
                        className="progress-percent"
                        style={{ width: `${rate.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-2" style={{ color: "white" }}>
                    {rate.percentage}%
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingAndReview;
