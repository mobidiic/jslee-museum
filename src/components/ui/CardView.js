import React, { Component } from 'react'
import ExhibArticle from './ExhibArticle'
import NoticArticle from './NoticArticle'

class CardView extends Component {
  render(){
    return (
      <div className="section-wrapper">
        <section className="exhib-article">
          <ExhibArticle />
        </section>
        <section className="notic-article">
          <NoticArticle />
        </section>
      </div>
    )
  }
}


export default CardView
