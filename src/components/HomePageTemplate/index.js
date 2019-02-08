import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import ContactForm from '../ContactForm'
import TeamSection from '../TeamSection'
import Careers from '../Careers'

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
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
          {title}
          </h1>
          <h2 className="subtitle">
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
    <a name='equateam' />
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          
          <h1 className="title is-1">The Equa Team</h1>
          <h2 className="subtitle">
            We are evolving agreements.
          </h2>
        </div>
      </div>
    </section>

    <section className="section team">
      <TeamSection teamMembers={team_members}/>
    </section>


    <a name='equacareers' />

    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          
          <h1 className="title is-1">Equa Careers</h1>
          <h2 className="subtitle">
            Evolve agreements with us!
          </h2>
        </div>
      </div>
    </section>

    <section>
      <div className='container'>
        <h1>&nbsp;</h1>
        <div className='columns'>
          <div className='column is-two-thirds'>
            <Careers />
            <script src="https://equa.bamboohr.com/js/jobs2.php" type="text/javascript"></script>
          </div>
          <div className='column '>
              <figure className='image is-4by3'>
                <img className='is-rounded' src='/img/todo-list.jpeg' />
              </figure>
          </div>

        </div>
      </div>
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
