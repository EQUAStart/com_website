import React from 'react'
import PropTypes from 'prop-types'

const ContactForm = ({email, description}) => {
  return (
    <div
      className='content'>
      <article className="message is-primary">
        <div className="message-header is-size-1">
          {description}
        </div>
        <div className="message-body has-background-white-ter" >
          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/contact-success">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label className="label" >Your Name:</label>
              <div className="control">
                <input className="input" type="text" name="name" />   
              </div>
            </p>
            <p>
              <label className="label">Your Email:</label>
              <div className="control">
                <input className="input" type="email" name="email" />
              </div>
            </p>
            <p>
              <label className="label">Message: </label>
              <div className="control">
                <textarea className="textarea" name="message"></textarea>
              </div>
            </p>
            <p>
              <button className="button is-primary is-large" type="submit">Send</button>
            </p>
          </form>
        </div>
      </article>

    </div>

    
  )
}

ContactForm.propTypes = {
  email: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default ContactForm
