import React from 'react';
import Video from './Video';
//import icon from '../../public/icons/icon.png';

const VideoDisplay = props => {
  const { videos, toVideoPage } = props;
  return (
    <div className="video-display">
      <div className="row">
        <div className="col-sm-12">
          <input className="search" type="text" placeholder="  Search"></input>
        </div>

      </div> 
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
