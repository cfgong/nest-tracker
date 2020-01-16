import React from 'react'

import NavBar from './components/NavBar'

class VideoPage extends React.Component {
  constructor() {
    super();
    this.state = {
      title: localStorage.getItem("title"),
      video_link: localStorage.getItem("video_link"),
      original_link: localStorage.getItem("original_link"),
      video_location: localStorage.getItem("video_location"),
      blurb: localStorage.getItem("blurb")
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
          <div className="col-sm-6">
            <div className="stack">
              <h2>{this.state.title}</h2>
              <iframe className = "video-page-video" src ={this.state.video_link}></iframe><br/>
              <p>Location: {this.state.video_location}</p>
              <form action={this.state.original_link} method="get" target="_blank">
                <button type="submit" className="btn btn-light">Source Link</button> 
              </form>
              <p>{this.state.blurb}</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="stack"> 
            <iframe className="video-page-iframe" 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdm2PioJrsNQFXZa_R7It2wesSdm5YAySNOcTp2GEWhBnlthQ/viewform"></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPage;