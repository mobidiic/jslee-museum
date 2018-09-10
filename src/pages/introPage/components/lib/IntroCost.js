import React from 'react'
import '../../../../../stylesheets/pages/introPage/IntroCost.scss'


const IntroCost = () => {
  return (
    <div className="intro-cost-wrapper">
      <table>
        <thead>
          <tr>
            <th>구분</th>
            <th>개인</th>
            <th>단체</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>어른(25 - 64 세)</td>
            <td>1,500</td>
            <td>1,000</td>
          </tr>
          <tr>
            <td>청소년(13 - 24 세)</td>
            <td>800</td>
            <td>500</td>
          </tr>
          <tr>
            <td>어린이(7 - 12 세)</td>
            <td>400</td>
            <td>300</td>
          </tr>
        </tbody>
      </table>
      <div className="intro-cost-explain">
        <span><sup>*</sup>면제 : 6세 이하 65세 이상, 장애인, 국가유공자, 독립유공자, 5·18민주유공자 등 </span>
        <span><sup>*</sup>할인 : 제주특별자치도민, 명예도민증 소지자 및 직계 존·비속, 재외도민증 소지자</span>
        <span><sup>*</sup>단체적용 : 10인 이상</span>
      </div>
    </div>
  )
}

export default IntroCost
