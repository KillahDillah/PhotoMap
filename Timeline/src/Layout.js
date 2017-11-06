import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Layout extends Component {

  render() {
    return(
      <div className="main-contain">
        <div className="nav">
          <ul>
            <Link>Timeline</Link>
            <Link>Map</Link>
          </ul>
        </div>
      </div>
    )
  }
}

export default Layout