import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './styles.sass'
import Helmet from 'react-helmet'
import { TweenMax, TimelineLite, Power4, Power2, Linear } from "gsap/TweenMax"
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

    
    this.svgContainer = null
    this.messageContainer = null
    this.circles = null
    this.equaLogo = null
    this.networkLines = null
    this.prefineryForm = null
    this.document1 = null
    this.document2_1 = null
    this.document2_2 = null
    this.document2_3 = null
    this.document2_4 = null
    this.document2_5 = null
    this.document2_6 = null
    this.platform_1_container = null
    this.platform_1_base = null
    this.platform_1_groundfx = null
  }

  playAnimation () {
    const tl = new TimelineLite()

    tl.from(this.circles, 2, {css:{scale:1.5, opacity:0, rotation: 360},ease:Power2.easeInOut})
      .fromTo(this.messageContainer, 1.5, {y:-250, opacity:0, ease: Power4.easeOut}, {y:0, opacity:1},'-=1.75')
      .fromTo(this.equaLogo, 1.5,{css: {left:-250,bottom:250, opacity:0}},{css:{bottom:50,left:350,opacity:1}},'equalogo')
      .fromTo(
        this.equaLogo,
        .05,
        { webkitFilter: 'brightness(0.01)', filter: 'brightness(0.01)' },
        {
          webkitFilter: 'brightness(5)',
          filter: 'brightness(5)',
          yoyo: true,
          repeat: 3,
          repeatDelay: 0.05,
          ease: Linear.easeNone
        },
        'equalogo'
      )
      .staggerFrom([
        this.docnet_1,
        this.docnet_2,
        this.docnet_3,
        this.docnet_4,
        this.docnet_5,
        this.docnet_6,
      ], 0.75, {opacity: 0}, 0.25, 'equalogo+=1.5')
      .to(
        this.equaLogo,
        0.5,
        { webkitFilter: 'brightness(1)', filter: 'brightness(1)' }
      )
      .fromTo(
        this.networkLines,
        0.05,
        { opacity: 0, webkitFilter: 'brightness(0.01)', filter: 'brightness(0.01)' },
        {
          webkitFilter: 'brightness(5)',
          filter: 'brightness(5)',
          opacity: 1,
          yoyo: true,
          repeat: 3,
          repeatDelay: 0.05,
          ease: Linear.easeNone
        },
        'equalogo'
      )
      .to(
        this.networkLines,
        0.5,
        {webkitFilter: 'brightness(1)', filter: 'brightness(1)', opacity: 1}
      ).fromTo(this.prefineryForm, 1.5, {opacity: 0, top: -75}, {opacity: 1, top: 0, ease: Power4.easeOut})
      .from(this.platform_1_container, 1.75, {opacity: 0, bottom: -100})
      .staggerFrom([
        this.document2_1,
        this.document2_2,
        this.document2_3,
        this.document2_4,
        this.document2_5,
        this.document2_6,
      ], 1.75, {bottom: 500}, 0.5, '+=1.5' )
  }

  componentDidMount () {
    const prefineryScript = require('../Prefinery')

    console.log('componentDidMount')
    
    this.playAnimation()

  }

  render () {
    return (
      <div
        className='content'>

        <Helmet>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
        </Helmet>

        <article className="message is-primary waitlist-container" onClick={ ()=> {this.playAnimation()}}>
          <div className="message-header is-size-1">
            {this.state.description}
          </div>
          <div className="message-body waitlist-body-container" >
            <div className="svg-bg" ref={div => this.simplifyContainer = div}>
              <div ref={div => this.circles = div} className='circles'>
              </div>
              <div ref={div => this.networkLines = div} className='network-lines'>
              </div>
              <div ref={div => this.equaLogo = div} className='equa-logo'>
              </div>
              <div className='document-network'>
                <div ref={div => this.docnet_1 = div} className='document-1'>
                </div>
                <div ref={div => this.docnet_2 = div} className='document-2'>
                </div>
                <div ref={div => this.docnet_3 = div} className='document-3'>
                </div>
                <div ref={div => this.docnet_4 = div} className='document-4'>
                </div>
                <div ref={div => this.docnet_5 = div} className='document-5'>
                </div>
                <div ref={div => this.docnet_6 = div} className='document-6'>
                </div>
              </div>
             

              <div className='platform-1-container' ref={div => this.platform_1_container = div}>
                <div className='platform-1-groundfx' ref={div => this.platform_1_groundfx = div}></div>
                <div className='platform-1-base' ref={div => this.platform_1_base = div}></div>
              </div>

              <div className='doc-stack-1'>
                <div ref={div => this.document2_1 = div} className='document-2'>
                </div>
                <div ref={div => this.document2_2 = div} className='document-2'>
                </div>
                <div ref={div => this.document2_3 = div} className='document-2'>
                </div>
                <div ref={div => this.document2_4 = div} className='document-2'>
                </div>
                <div ref={div => this.document2_5 = div} className='document-2'>
                </div>
                <div ref={div => this.document2_6 = div} className='document-2'>
                </div>
              </div>

              <div ref={div => this.messageContainer = div} className='message-container'>
              </div>

              
            </div>
            <div>&nbsp;</div>
            <div className="columns is-vcentered is-gapless">
              <div className="column is-7 transparent">
                <div className="box prefinery-form-container" ref={div => this.prefineryForm = div} >
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
