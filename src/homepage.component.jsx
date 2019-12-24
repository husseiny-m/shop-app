import React from 'react';

import './homepage.styles.scss'

const HomePage = () => (
  <div className="homepage">
    <h1>Welcome to my homepage</h1>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <div className="title">Hats</div>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <div className="title">JACKETS</div>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <div className="title">Shoes</div>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <div className="title">WOMENS</div>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <div className="title">MENS</div>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>
    </div>
  </div>

)

export default HomePage;