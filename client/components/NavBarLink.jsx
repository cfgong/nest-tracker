import React from 'react';

const NavBarLink = props => {
  const { text, link } = props;

  return (
    <div className="link">
      <form className="form-inline" action={link} method="get">
          <button type="submit" className="btn btn-light">{text}</button> 
      </form>
    </div>
  );
};

export default NavBarLink;
