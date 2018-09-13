import React from 'react'
import PropTypes from 'prop-types'
import { FaCircle } from 'react-icons/Fa'

const LeejsIntroYears = ({ year, title }) => {
  return(
    <div>
        <div className="year-year"><span><FaCircle /></span>{year}</div>
        <div className="year-title">{title}</div>
    </div>
  )
}

LeejsIntroYears.propTypes = {
  year: PropTypes.string,
  title: PropTypes.string
}

export default LeejsIntroYears
