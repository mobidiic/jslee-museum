import React, { Component } from 'react'
import StudioPeople from './lib/StudioPeople'
import studioImg1 from '../../../../imgs/src/studioImg1.jpeg'
import '../../../../stylesheets/pages/introPage/Studio.scss'

class Studio extends Component {

  state={
    currentPeople:{
      th: 7,
      names:[
        '김용철',
        '김차영',
        '박은영',
        '스타가고',
        '이현주',
        '이가희',
        '이지현',
        '허정숙'
      ]
    }
  }

  render(){
    return (
      <div className="studio-wrapper">
        <div className="studio-title">
          창작스튜디오
        </div>
        <div className="studio-img">
          <img src={studioImg1} />
        </div>
        <div className="studio-contents">
          <div className="studio-hi">
            이중섭 문화의 거리 조성사업의 일환으로 미술작가에게는 편리하고 안정된 작업조건을 제공하고, 지역주민에게는 문화예술의 향유기회를 확대하기 위하여 만들어진 공간입니다.
          </div>
          <div className="studio-people">
            <div className="people-current">
              <div className="people-th">
                <div> 현재 입주인원 </div>
                <span>{this.state.currentPeople.th}</span><span>기</span>
              </div>
              {this.state.currentPeople.names.map((name, i)=>{
                return <StudioPeople name={name} key={i} />
              })}
            </div>
            <div className="people-past">
              <a href="#">더 알아보기...</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Studio
