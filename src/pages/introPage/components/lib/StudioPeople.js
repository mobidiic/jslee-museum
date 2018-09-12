import React from 'react'
import PropTypes from 'prop-types'

const StudioPeople = ({name}) => {
  return(
    <div className="people-name">
      {name}
    </div>
  )
}

StudioPeople.propTypes = {
  name: PropTypes.string
}

export default StudioPeople
