import React, { Fragment } from 'react';
import Nav from '../components/Nav';
import Seo from '../components/SEO';

const Layout = (props) => {
  return (
    <Fragment>
      <Seo />
      <Nav />
      <main className="max-w-4xl mx-auto">{ props.children }</main>
    </Fragment>
  )
}

export default Layout
