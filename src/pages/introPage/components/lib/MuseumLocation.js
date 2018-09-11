import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import '../../../../../stylesheets/pages/introPage/MuseumLocation.scss'

class MuseumLocation extends Component {


  componentDidMount(){

    window.onload = () => {
      var map = new naver.maps.Map('map')
      var address = '이중섭로 27-3'
      naver.maps.Service.geocode({address: address}, function(status, response){
        if (status !== naver.maps.Service.status.OK){
          return alert('address 의 결과가 없습니다.')
        }
        var result = response.result
        var myAddress = new naver.maps.Point(result.items[0].point.x, result.items[0].point.y)
        map.setCenter(myAddress)
        var marker = new naver.maps.Marker({
            position: myAddress,
            map: map
          })
      })
    }

  }

  render(){
    return(
      <div className="museum-map-wrapper">
        <Helmet>
          <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?clientId=YVN0ejzfAAfDY_YlIrSM&submodules=geocoder">
          </script>
        </Helmet>
        <div id="map" style={{width: '400px', height: '200px'}}>
        </div>
      </div>
    )
  }
}


export default MuseumLocation
