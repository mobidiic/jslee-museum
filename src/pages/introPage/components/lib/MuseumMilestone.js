import React, { Component } from 'react'
import Milestones from './Milestones'
import '../../../../../stylesheets/pages/introPage/MuseumMilestone.scss'

class MuseumMilestone extends Component {

  state={
    milestones: [
          {
            year: '1995.11',
            title: '이중섭거주지 기념표석 건립'
          },
          {
            year: '1996.03',
            title: '이중섭거리 지정'
          },
          {
            year: '2001.06',
            title: '이중섭 기념조형물 설치'
          },
          {
            year: '2003.07',
            title: '2종미술관 등록'
          },
          {
            year: '2004.08',
            title: '갤러리현대, \'파란 게와 어린이\'외 53점 기증'
          },
          {
            year: '2004.09',
            title: '1종미술관 등록'
          },
          {
            year: '2006.03',
            title: '주차장, 공원 건립'
          },
          {
            year: '2008.12',
            title: '창작스튜디오 준공'
          }
        ]
    }

  render(){
    return(
      <ul id="museumMilestone">
        <div className="museum-milestone-hi">
          연혁
        </div>
          {this.state.milestones.map((milestone, i) =>{
            return (
              <Milestones years={milestone.year} titles={milestone.title} key={i} />
            )
          })
        }
      </ul>
    )
  }
}

export default MuseumMilestone
