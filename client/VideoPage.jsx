import React from 'react'

import videos from './content/videos.json'
import NavBar from './components/NavBar'
import About from './components/About'
import VideoDisplay from './components/VideoDisplay'
import Footer from './components/Footer'

class VideoPage extends React.Component {
  constructor() {
    super();
  }

  // TODO: make a video link component
  // TODO: insert a back button to go back to homepage

  render() {
    return (
      <div className="video-page-body">
        <NavBar icon_link='./index.html'/>
        <div className="row">
          <div className="col-sm-6">
              Need to learn redux to pass video url
          </div>
          <div className="col-sm-6">
              <iframe className="video-page-iframe" 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdm2PioJrsNQFXZa_R7It2wesSdm5YAySNOcTp2GEWhBnlthQ/viewform"></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPage;