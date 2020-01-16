import React from 'react'

import videos from './content/videos.json'
// import icon from './content/icon.png'
// import img_link from '../../public/icons/icon.png'

import NavBar from './components/NavBar'
import About from './components/About'
import VideoDisplay from './components/VideoDisplay'
import Footer from './components/Footer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos
    };
    this.toVideoPage = this.toVideoPage.bind(this);
  }

  toVideoPage(title, video_link, original_link, video_location, blurb){
    localStorage.setItem("title", title);
    localStorage.setItem("video_link", video_link);
    localStorage.setItem("original_link", original_link);
    localStorage.setItem("video_location", video_location);
    localStorage.setItem("blurb", blurb);
    location.href='./form.html';
  }
  // TODO: figure out how to load images
  render() {
    return (
      <div>
        <NavBar icon_link='./index.html' 
          about_link='#aboutsection'
          video_link='#videosection'
          contact_link='#contactsection'/>
        <About /> 
        <VideoDisplay videos={this.state.videos} toVideoPage={this.toVideoPage}/>
        <Footer />
      </div>
    );
  }
}

export default App;
