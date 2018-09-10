import React, { Component } from 'react'
import * as d3Milestones from 'd3-milestones'

class MuseumMilestone extends Component {

  componentDidMount(){
    const vis = d3Milestones('#museumMilestone')
    vis.mapping({
      'timestamp' : 'year',
      'text' : 'title'
    })
    vis.parseTime('%Y').aggregateBy('year')
    vis.render([
      {
        year: 333,
        title: 'test'
      },
      {
        year: 444,
        title: 'test2'
      }
    ])
  }


  render(){
    return(
      <div id="museumMilestone">
      </div>
    )
  }
}

export default MuseumMilestone
