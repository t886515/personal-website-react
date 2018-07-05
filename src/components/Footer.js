import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const footerRoutes = [
  { title: 'Home |', route: '/' },
  { title: ' About |', route: '/about' },
  { title: ' Resume |', route: '/resume' },
  { title: ' Journal |', route: '/journal' },
  { title: ' Contact Me', route: '/contact' },
];

const Footer = () => {
  return (
    <div className="footer">
      {footerRoutes.map(({ title, route }, i) => (
        <Link className="link" key={i} to={route}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default withRouter(Footer);
