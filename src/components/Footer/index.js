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
    </footer>
  )
}

export default Footer
