import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../../stylesheets/MainNav.scss'

class MainNav extends Component {


  render(){
    return (
      <nav id="main-nav">
        <ul className="menu">
          <Link to="about">
            <li>소개
              <ul className="sub-menu">
                <li>미술관</li>
                <li>이중섭</li>
                <li>스튜디오</li>
              </ul>
            </li>
          </Link>
          <Link to="exhibition">
            <li>전시</li>
          </Link>
          <Link to="archive">
            <li>아카이브</li>
          </Link>
          <Link to="news">
            <li>소식
              <ul className="sub-menu">
                <li>공지사항</li>
                <li>Q&A</li>
              </ul>
            </li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default MainNav
