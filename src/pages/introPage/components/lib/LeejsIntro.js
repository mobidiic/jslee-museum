import React, { Component } from 'react'
import LeejsIntroYears from './LeejsIntroYears'
import LeejsImg from '../../../../../imgs/src/jsleeImg1.jpg'
import '../../../../../stylesheets/pages/introPage/LeejsIntro.scss'

class LeejsIntro extends Component {

  state={
    introYear:[
      {
        year:'1916',
        title:'평안남도 평원군 조운면 출생'
      },
      {
        year:'1936',
        title:'일본 도쿄 데이코쿠 미술학교 입학'
      },
      {
        year:'1937',
        title:'도쿄 분카 학원 편입'
      },
      {
        year:'1941',
        title:'조선신미술가협회 결성'
      },
      {
        year:'1943',
        title:'자유미술가협회 특별상 태양상 수상'
      },
      {
        year:'1945',
        title:'원산에서 일본인 여자 이남덕과 결혼'
      },
      {
        year:'1946',
        title:'원산사범학교 미술교사 근무'
      },
      {
        year:'1950',
        title:'한국전쟁시 월남해서 제주도 도달'
      },
      {
        year:'1952',
        title:'부인이 일본으로 넘어감'
      },
      {
        year:'1955',
        title:'미도파 백화점 첫 전시회'
      },
      {
        year:'1956',
        title:'간염으로 사망'
      }
    ]
  }


  render(){
  return (
    <div className="leejs-intro-wrapper">
      <div className="leejs-intro-img">
        <img src={LeejsImg} />
        <div className="leejs-intro-hi">
          <div>이중섭</div>
          <div>1916 - 1956</div>
        </div>
      </div>
      <div className="leejs-intro-years">
        {this.state.introYear.map((years, i) =>{
          return(
          <LeejsIntroYears year={years.year} title={years.title} key={i} />
        )})}
      </div>
    </div>
  )}
}

export default LeejsIntro
