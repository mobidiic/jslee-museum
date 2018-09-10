import React from 'react'
import introMuseumImg from '../../../../imgs/src/intro_museum.png'
import IntroOpen from './lib/IntroOpen'
import IntroCost from './lib/IntroCost'
import MuseumMilestone from './lib/MuseumMilestone'
import MuseumLocation from './lib/MuseumLocation'
import '../../../../stylesheets/pages/introPage/Museum.scss'

const Leejs = () => {
  return (
    <div className="museum-wrapper">
      <div className="museum-image">
        <img src={introMuseumImg} />
      </div>
      <div className="museum-explain">
        <p>불운한 시대의 천재화가로 일컬어지는 대향 이중섭 화백이 서귀포시에 거주하면서 서귀포의 아름다운 풍광과 넉넉한 이 고장 인심을 소재로 하여 서귀포의 환상 등 많은 작품을 남겼습니다.</p>
        <p>약 11개월이라는 짧은 기간 그의 서귀포 체류는 그 후 대향 이중섭 예술세계에 지대한 영향을 끼쳤습니다.</p>
        <p>서귀포시에서는 그의 높은 창작 열의와 불멸의 예술혼을 후대에 기리고, 이 고장을 찾아오는 분들과 시민들이 이중섭 화백의 예술적 발자취에 대하여 공감할 수 있는 계기를 마련하고자 합니다.</p>
      </div>
      <div className="museum-viewing">
        <div className="museum-open">
          <IntroOpen />
        </div>
        <div className="museum-cost">
          <IntroCost />
        </div>
      </div>
      <div className="museum-milestone">
      </div>
      <div className="museum-location">
      </div>
    </div>
  )
}


export default Leejs
