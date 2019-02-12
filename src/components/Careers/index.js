import React, {Component} from 'react'
import Helmet from 'react-helmet'

class Careers extends Component {

  // componentDidMount () {
  //   const script = document.createElement('script')

  //   script.src = 'https://equa.bamboohr.com/js/jobs2.php'
  //   script.async = true

  //   document.body.appendChild(script)
  // }

  // componentDidMount() {
  //   this._isMounted = true;
  //   window.onpopstate = ()=> {
  //     if(this._isMounted) {
  //       const { hash } = location;

  //       switch ()

  //       if(hash.indexOf('home')>-1 && this.state.value!==0)
  //         console.log('home')
  //         this.setState({value: 0})
  //         if(hash.indexOf('users')>-1 && this.state.value!==1)
  //         console.log('home')
  //         this.setState({value: 1})
  //         if(hash.indexOf('data')>-1 && this.state.value!==2)
  //         this.setState({value: 2})
  //         console.log('home')
  //     }
  //   }
  // }

  render () {
    const bambooHrScript = require('../BambooHR') 

      return (
        <div id='BambooHR-ATS'>
          <Helmet>
            <link href="https://equa.bamboohr.com/css/jobs-embed.css" rel="stylesheet" />
          </Helmet>
        </div>
    )
  }
}

export default Careers
