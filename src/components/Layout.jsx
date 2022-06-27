import React from 'react';
import Header from './Header';

function Layout(props) {
  return (
    <div className="w-full">
      <Header />
      <div>{props.children}</div>
    </div>
  );
}

export default Layout;
