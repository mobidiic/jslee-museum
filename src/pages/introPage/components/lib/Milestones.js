import React from 'react'
import '../../../../../stylesheets/pages/introPage/Milestones.scss'

const Milestones = ({years, titles}) => {
  return (
    <li className="museum-milestone">
      <div className="milestone-wrapper">
        <div className="milestone-year">{years}</div>
        <div className="milestone-title">{titles}</div>
      </div>
    </li>
  )
}



export default Milestones
