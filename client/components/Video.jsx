import React from 'react';

const Video = props => {
  const { video, toVideoPage } = props;
  const {
      key, title, video_link, original_link, location, blurb
  } = video;
  return (
    <div className="col-sm-4 video-card">
      <div className="video-content" onClick={() => toVideoPage(video_link)}>
        <iframe src ={video_link}></iframe><br/>
        <p>Location: {location}</p>
        <form action={original_link} method="get" target="_blank">
          <button type="submit" className="original-button">Original Video Link</button> 
        </form>
        <h2>{title}</h2>
        <p>Location: {location}</p>
        </div>
    </div>
  );
};

export default Video;
