import React, { Component } from 'react'
import '../../../stylesheets/MainNav.scss'

class MainNav extends Component {


  render(){
    return (
      <nav id="main-nav">
        <ul className="menu">
          <li><a href="#">소개</a>
            <ul className="sub-menu">
              <li><a href="#">미술관</a></li>
              <li><a href="#">이중섭</a></li>
              <li><a href="#">스튜디오</a></li>
            </ul>
          </li>
          <li><a href="#">전시</a></li>
          <li><a href="#">아카이브</a></li>
          <li><a href="#">소식</a>
            <ul className="sub-menu">
              <li><a href="#">공지사항</a></li>
              <li><a href="#">Q&A</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}

export default MainNav
