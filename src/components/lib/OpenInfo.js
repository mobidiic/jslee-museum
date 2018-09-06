import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../../stylesheets/OpenInfo.scss'
import {IoMdTime} from 'react-icons/io'

const OpenInfo = ({day, time}) => {
  return(
    <div className="open-wrapper">
      <div className="open-notice">
        <div className="time-icon">
          <IoMdTime />
        </div>
        <div className="time-explain">
          <div>오늘은 <span className="day">{day}</span>요일</div>
          <div>관람시간은 <span className="time">{time}</span>입니다.</div>
        </div>
      </div>
      <div className="open-timetable">
        <table>
          <tbody>
            <tr>
              <th>관람시간</th>
              <th>매표마감</th>
            </tr>
            <tr>
              <td>09:00 - 18:00</td>
              <td>17:30</td>
            </tr>
            <tr>
              <td><sup>*</sup>09:00 - 20:00&nbsp;</td>
              <td>19:30</td>
            </tr>
            <tr>
              <td colSpan="2">*하절기(7 - 9월)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

OpenInfo.proptypes={
  day: PropTypes.string,
  time: PropTypes.string
}

export default OpenInfo
