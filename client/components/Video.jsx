import React from 'react';

const Video = props => {
  const { video, toVideoPage } = props;
  const {
      key, title, video_link, original_link, location, blurb
  } = video;
  return (
    <div className="col-sm-4 video-card">
      <div className="video-content" onClick={() => toVideoPage(video_link)}>
        <div className="video-content-container">
          <iframe src ={video_link}></iframe><br/>
        </div>
        <h2 class="video-title">{title}</h2>
        <p class="subtitle">{location} | <a href={original_link}>Source</a></p>
        </div>
    </div>
  );
};

export default Video;
