import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ExhibitInfo extends Component {

  render(){
    const { exhibState, exhibTitle, exhibDate, imgSrc } = this.props
    return(
      <div className="exhibit-wrapper">
        <div className="exhib-info">
          <div className="exhib-state">{exhibState}</div>
          <div className="exhib-title">{exhibTitle}</div>
          <div className="exhib-date">{exhibDate}</div>
        </div>
        <div className="exhib-img">
          <img src={imgSrc} className="exhibImg" />
        </div>
      </div>
    )
  }
}

ExhibitInfo.proptypes={
  exhibState: PropTypes.string,
  exhibTitle: PropTypes.string,
  exhibDate: PropTypes.string
}

export default ExhibitInfo
