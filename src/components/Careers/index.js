import React, {Component} from 'react'
import Helmet from 'react-helmet'

class Careers extends Component {

  componentWillMount () {
    const script = document.createElement('script')

    script.src = 'https://equa.bamboohr.com/js/jobs2.php'
    script.async = true

    document.body.appendChild(script)
  }

  render () {
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
