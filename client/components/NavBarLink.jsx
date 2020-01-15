import React from 'react';

const NavBarLink = props => {
  const { text, link } = props;

  return (
    <div className="link">
      <a href={link}> {text}</a>
    </div>
  );
};

export default NavBarLink;
