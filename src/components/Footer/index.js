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
      </div>
      <div className='container'>
        <div className='columns is-centered'>
          <div className='column is-one-third has-text-centered'>
            <Link to='/terms-of-use'>Terms of use</Link>
          </div>
          <div className='column is-one-third has-text-centered'>
            <Link to='/privacy-policy'>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
