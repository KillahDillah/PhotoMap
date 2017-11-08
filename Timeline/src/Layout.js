import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Layout extends Component {

  render() {
    return(
      <div className="main-contain">
        <div className="nav">
          <ul>
            <Link to="/">Timeline</Link>
            <Link to="/">Map</Link>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Layout