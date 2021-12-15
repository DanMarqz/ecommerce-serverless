import React from 'react';
import { Link } from 'gatsby';

const navItems = [
  {
    caption: 'Home',
    href: '/'
  },
  {
    caption: 'Products',
    href: '/products'
  },
  {
    caption: 'Cards',
    href: '/cards'
  }
]

const Nav = (props) => {

  return (
    <header className="bg-gray-800 text-gray-100 shadow-md">
      <nav>
        <ul className="flex">
          {
            navItems.map((item, index) => (
              <li key={index}> 
                <Link className="hover:bg-gray-700  px-6 py-4 inline-block" to={ item.href }>{ item.caption }</Link> 
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Nav
