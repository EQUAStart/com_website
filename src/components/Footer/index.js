import React from 'react'
import config from '../../../data/config'
import {Link} from 'gatsby'


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='content has-text-centered'>
        <p>
          {config.copyright}
        </p>
        <div className={`navbar-menu`} id='footerMenu'>
          <Link to='/terms-of-use' className='navbar-item'>Terms of use</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
