import React from 'react'
import '../../../../../stylesheets/pages/introPage/IntroOpen.scss'

const IntroOpen = () => {
  return(
    <div className="intro-open-wrapper">
      <div className="intro-open-timetable">
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
              <td className="intro-open-sup"><sup>*</sup>09:00 - 20:00&nbsp;</td>
              <td>19:30</td>
            </tr>
          </tbody>
        </table>
        <span><sup>*</sup>하절기 : 7 - 9 월</span>
      </div>
    </div>
  )
}

export default IntroOpen
