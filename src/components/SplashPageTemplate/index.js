import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const SplashPageTemplate = ({
  title,
  meta_title,
  meta_description,
}) => (

  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    
  </div>

)

SplashPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,

}

export default SplashPageTemplate
