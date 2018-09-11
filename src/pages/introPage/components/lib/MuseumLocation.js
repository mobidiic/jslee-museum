import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { loadNavermapsScript, Map as NaverMap} from 'react-naver-maps'
import '../../../../../stylesheets/pages/introPage/MuseumLocation.scss'

class MuseumLocation extends Component {

  state={
    loaded: false
  }

  componentDidMount(){

    var HOME_PATH = (window.HOME_PATH) ? window.HOME_PATH : ''
    var map = null
    var marker

    loadNavermapsScript({clientId:'YVN0ejzfAAfDY_YlIrSM', submodules: ['geocoder']})
      .then((navermaps) => {
        this.navermaps = navermaps
        this.setState=({loaded: true})
        map = new navermaps.Map('map',{
          center: new navermaps.LatLng(33.2458529, 126.5648946),
          zoom: 11
        })
        marker = new navermaps.Marker({
          position: new navermaps.LatLng(33.2458529, 126.5648946),
          map: map
        })
      })
}

  render(){
    return(
      <div className="museum-map-wrapper">
        <Helmet>
          <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?clientId=YVN0ejzfAAfDY_YlIrSM&submodules=geocoder">
          </script>
        </Helmet>
        <div className="museum-map-hi">
          <span> 오시는 길 </span>
        </div>
        <div id="map" style={{width: '600px', height: '400px'}}>
        </div>
        <div className="museum-map-contact">
          <div>주소 : 제주특별자치도 서귀포시 이중섭로 27-3</div>
          <div>연락처 : 064-740-3567</div>
        </div>
      </div>
    )
  }
}


export default MuseumLocation
