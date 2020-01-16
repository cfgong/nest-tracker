import React from 'react'

import NavBar from './components/NavBar'

class VideoPage extends React.Component {
  constructor() {
    super();
    this.state = {
      video_link: localStorage.getItem("video_link")
    }
  }

  // TODO: insert a back button to go back to homepage
  render() {
    return (
      <div className="video-page-body">
        <NavBar icon_link='./index.html' 
          about_link='./index.html#aboutsection'
          video_link='./index.html#videosection'
          contact_link='./index.html#contactsection'/>
        <div className="row">
          <div className="col-sm-6 stack">
              <iframe className ="video-page-iframe"
                src ={this.state.video_link}></iframe><br/>
          </div>
          <div className="col-sm-6 stack">
              <iframe className="video-page-iframe" 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdm2PioJrsNQFXZa_R7It2wesSdm5YAySNOcTp2GEWhBnlthQ/viewform"></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPage;