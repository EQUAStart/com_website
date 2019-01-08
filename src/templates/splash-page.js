import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import SplashPageTemplate from '../components/SplashPageTemplate'

const SplashPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <div className='splash-graphic-container'>
      <SplashPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
      />
      <img id='splash-graphic' src='/img/icon_presentation@1x.svg' />
    </div>
  )
}

SplashPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default SplashPage

export const pageQuery = graphql`
  query SplashPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        
      }
    }
  }
`
