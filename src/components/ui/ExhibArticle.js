import React, { Component } from 'react'

class ExhibArticle extends Component {


  render(){
    return(
      <div className="exhibit">
        <div className="nowExhib">
          now exhibit
        </div>
        <div className="nextExhib">
          next exhibit
        </div>
        <div className="prevExhib">
          prev exhibit
        </div>
      </div>
    )
  }
}


export default ExhibArticle
