import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import ContactForm from '../ContactForm'
import TeamSection from '../TeamSection';

const HomePageTemplate = ({
  title,
  heading,
  description,
  contact_form_description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
  team_members
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>

    <section className="section hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
          {title}
          </h1>
          <h2 class="subtitle">
          {meta_description}
          </h2>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <section className="section section-gradient">
          <div className="columns is-desktop">
              <div className="column">
                <ContactForm description={contact_form_description}></ContactForm>
              </div>
              <div className="column">
                <div className='splash-graphic-container'>
                  <img id='splash-graphic' src='/img/icon_presentation@1x.svg' />
                </div>
              </div>
          </div>
        </section>
      </div>
    </section>

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">The Equa Team</h1>
          <h2 class="subtitle">
            We are evolving agreements.
          </h2>
        </div>
      </div>
    </section>

    <section className="section">
      <TeamSection teamMembers={team_members}/>
    </section>


  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  contact_form_description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
  team_members: PropTypes.shape({
    members: PropTypes.array,
  })
}

export default HomePageTemplate
