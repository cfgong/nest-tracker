import React from 'react';
import Video from './Video';

const VideoDisplay = props => {
  const { videos, toVideoPage } = props;
  return (
    <div className="video-display">
      <h1 className="header"><a name="videosection" data-hs-anchor="true">Video Display </a></h1>
      <div className="row">
        {videos.map(video => (
          <Video video={video} 
            key={video.id} 
            video_link={video.video_link}
            title={video.title}
            original_link={video.original_link}
            location={video.location}
            blurb={video.blurb}
            toVideoPage={toVideoPage} />
        ))}
      </div>
    </div>
  );
};

export default VideoDisplay;
