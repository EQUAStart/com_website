import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './styles.sass'
import Helmet from 'react-helmet'
// import SimplifyGraphic from '../../../static/img/marketing/equa_animation/complete_graphic.svg'
// import GraphicBGSVG from './GraphicBGSVG'
// import Icon from '../svg/my-icon.svg';

class ContactForm extends Component {

  constructor ({email, description}) {
    super({email, description})
    this.state = {
      description: '', 
      email: ''
    }
    this.state.description = description
    this.state.email = email

    this.simplifyImage = null;
    this.simplifyContainer = null;
  }

  componentDidMount () {
    const prefineryScript = require('../Prefinery')
    // this.loaderTween = TweenLite.to(this.loaderWrap, 1, {
    //     x: "100%", ease: Expo.easeInOut, delay: 2,
    //     onComplete: () => {
    //         TweenLite.to( this.toggleBtn, 0.2, { autoAlpha: 1 } );
    //     }
    // })

    
  }

  render () {
    return (
      <div
        className='content'>

        <Helmet>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
        </Helmet>

        <article className="message is-primary">
          <div className="message-header is-size-1">
            {this.state.description}
          </div>
          <div className="message-body waitlist-background-image" >
            <div className="svg-bg" ref={div => this.simplifyContainer = div}>
              {/* {SimplifyGraphic} */}
              {/* <img id='simplifyPresentationContainer' src={SimplifyGraphic} ref={img => this.simplifyImage = img} />
              <GraphicBGSVG /> */}
            </div>
            <div className="columns is-vcentered is-gapless">
              <div className="column is-7 transparent">
                <div className="box prefinery-form-container" >
                  <div className='prefinery-form-embed' />
                </div>
              </div>
              <div className="column is-5">
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

ContactForm.propTypes = {
  email: PropTypes.string,
  description: PropTypes.string,
}

export default ContactForm
