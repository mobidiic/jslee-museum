import React, { Component } from 'react'
import { render } from 'react-dom'
import Root from './Root'
import '../stylesheets/index.scss'

window.React = React

render(
  <Root />,
  document.getElementById('react-container')
)
