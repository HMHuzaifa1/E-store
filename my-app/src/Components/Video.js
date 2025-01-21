import React from "react";

function Video() {
  return (
    <div
      className="video-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <video
        controls
        autoPlay
        muted
        loop
        style={{
          width: "80%",
          height: "70%",
        }}
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
