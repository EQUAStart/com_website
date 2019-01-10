import React from 'react'
import config from '../../../data/config'
import {Link} from 'gatsby'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className="columns">
          <div className="column">
            <Link className='navbar-item' to='/pricing'>
                Log In
            </Link>

            <Link className='navbar-item' to='/privacy-policy'>
              Privacy Policy
            </Link>
          </div>
          <div className="column  has-text-centered">
            <Link className='navbar-item' to='/support'>
              Support
            </Link>

            <Link className='navbar-item' to='/e-signature-consent'>
              E-signature Consent
            </Link>

            <Link className='navbar-item' to='/terms-of-service'>
              Terms
               of Service
            </Link>
          </div>
          <div className="column">
            <Link className='navbar-item' to='/careers'>
              Careers
            </Link>

            <Link className='navbar-item' to='/legal-disclosure'>
              Legal Disclosure
            </Link>

          </div>
        </div>
        <div className='content has-text-centered'>
          <p>
            {config.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
