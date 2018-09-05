import React, { Component } from 'react'
import ExhibitInfo from '../lib/ExhibitInfo'
import imgNow from '../../../imgs/src/exhibitNow.jpg'
import imgNext from '../../../imgs/src/exhibitNext.jpg'
import imgPrev from '../../../imgs/src/exhibitPrev.png'
import '../../../stylesheets/ExhibArticle.scss'


class ExhibArticle extends Component {


  render(){
    return(
      <div className="exhibit">
        <h3 className="extitle"> 전시 안내 </h3>
        <div className="nowExhib">
          <ExhibitInfo exhibState={'현재 전시'}
                       exhibTitle={'내 사랑 패밀리'}
                       exhibDate={`17. 3. 4 - 17. 5. 6`}
                       imgSrc={imgNow}
          />
        </div>
        <div className="nextExhib">
          <ExhibitInfo exhibState={'다음 전시'}
                       exhibTitle={'다방 르네상스 : 이중섭의 친구들'}
                       exhibDate={'17. 6. 4 - 17. 7. 22'}
                       imgSrc={imgNext}
          />
        </div>
        <div className="prevExhib">
          <ExhibitInfo exhibState={'지난 전시'}
                       exhibTitle={'소, 그리고 바람'}
                       exhibDate={'17. 1. 30 - 17. 2. 26'}
                       imgSrc={imgPrev}
          />
        </div>
      </div>
    )
  }
}


export default ExhibArticle
