import React from 'react'
import {FiAlertTriangle} from 'react-icons/fi'
import {IoLogoGithub} from 'react-icons/io'
import {MdMailOutline} from 'react-icons/md'
import '../../../stylesheets/pages/errorPage/errorPage.scss'


const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-icon">
        <FiAlertTriangle />
      </div>
      <h1> 404 Error : Not found </h1>
      <div className="error-message">
        <span> 이 페이지는 아직 구현되지 않았습니다. </span>
        <span> 빠른 시일 내에 만들겠습니다 :) </span>
      </div>
      <div className="error-route-wrapper">
        <div className="error-route-1">
          <a href="https://github.com/mobidiic/jslee-museum">
            <IoLogoGithub />
          </a>
        </div>
        <div className="error-route-2">
          <a href="mailto:sigus128@gmail.com">
            <MdMailOutline />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
