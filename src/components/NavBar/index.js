import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'
import SearchBox from '../SearchBox'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FaExternalLinkAlt } from 'react-icons/fa';


const NavBar = ({toggleNavbar, isActive}) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item home-link'>

            <div className='media'>
              <div className='media-left'>
                <figure >
                  <img src='/icons/favicon-64x64.png' />
                </figure>
              </div>

              <div className='media-content'>

                <strong> EQUA Start</strong>
              </div>
            </div>
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className="navbar-end">

            <a href='#equateam' className='navbar-item'>The Equanauts</a>
            <a href='#equacareers' className='navbar-item'>Careers</a>
            <OutboundLink target='_blank' className='navbar-item'
              href='http://equa.consulting/'
                    >
              Services
              <span className='icon'>
                &nbsp;
                <FaExternalLinkAlt />
              </span>
            </OutboundLink>
            <OutboundLink target='_blank' className='navbar-item'
              href='https://auth.merrillcorp.com/as/authorization.oauth2?client_id=Apigee&response_type=code&redirect_uri=https://datasiteone.merrillcorp.com/global/callback&state=&scope=openid'
                    >
              Investor's Portal
              <span className='icon'>
                &nbsp;
                <FaExternalLinkAlt />
              </span>
            </OutboundLink>
          </div>
          
        </div>
      </nav>
    )}
  />
)

export default NavBar
