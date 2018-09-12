import React from 'react'
import LeejsIntro from './lib/LeejsIntro'
import LeejsJeju from './lib/LeejsJeju'
import '../../../../stylesheets/pages/introPage/Leejs.scss'

const Leejs = () => {
  return(
    <div className="leejs-wrapper">
      <div className="leejs-intro">
        <LeejsIntro />
      </div>
      <div className="leejs-jeju">
        <LeejsJeju />
      </div>
    </div>
  )
}

export default Leejs
