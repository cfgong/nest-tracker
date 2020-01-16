import React from 'react';
// import icon from './content/icon.png';
import NavBarLink from './NavBarLink';

const NavBar = props => {
  const { icon_image, icon_link, about_link, video_link, contact_link } = props;
  // TODO: figure out how to lock nav bar when scrolling
  // map links
    // TODO: make a link button component 

  return (
    <div className="navigationbar">
      <a href={icon_link} className="nav-button">Home</a>

      <NavBarLink link={contact_link} text="Contact" />
      <NavBarLink link={video_link} text="Video" />
      <NavBarLink link={about_link} text="About Us" />

    </div>
  );
};

export default NavBar;
