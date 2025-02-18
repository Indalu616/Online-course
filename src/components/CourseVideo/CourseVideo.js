import React from "react";
import YouTube from "react-youtube";
import "./CourseVideo.css";
function CourseVideo({videoId}) {
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const opts = {
    height: "400px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
    </div>
  );
}

export default CourseVideo;
