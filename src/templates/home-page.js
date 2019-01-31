import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import HomePageTemplate from '../components/HomePageTemplate'

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <HomePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      description={frontmatter.description}
      contact_form_description={frontmatter.contact_form_description}
      offerings={frontmatter.offerings}
      testimonials={frontmatter.testimonials}
      team_members={frontmatter.team_members}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        contact_form_description
        offerings {
          blurbs {
            image
            text
          }
        }
        testimonials {
          author
          quote
        }
        team_members {
          members {
            fullName
            picture
            bio
          }
        }
      }
    }
  }
`
