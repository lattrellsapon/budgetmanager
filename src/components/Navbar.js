import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div className='flex-container'>
        <div>
          <h1>Watch my Budget</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link className='links' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='links' to='/about'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
