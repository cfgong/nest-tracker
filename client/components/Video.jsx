import React from 'react';

const Video = props => {
  const { video, toVideoPage } = props;
  const {
      key, title, video_link, original_link, location, blurb
  } = video;
  return (
    <div className="col-sm-4 video-card">
      <div className="video-content" onClick={() => toVideoPage(video_link)}>
        <h2>{title}</h2>
        <iframe src ={video_link}></iframe><br/>
        <button onclick={"window.location.href=" + original_link}>Source Link</button> 
        <p>Location: {location}</p>
        </div>
    </div>
  );
};

export default Video;
