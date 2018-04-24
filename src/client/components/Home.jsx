import React, { Component } from 'react'

import Boardcreate from './Boardcreate.jsx'
import Board from './Board.jsx'

import './../scss/home.scss'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      boards: ['first', 'second', 'third', 'fourth']
    }
  }

  newBoard (name) {
    this.setState({
      boards: this.state.boards.concat([name])
    })
  }

  render () {
    const boardItem = this.state.boards.map((d, i) => {
      return <li key={i}><Board board={d} /></li>
    })
    return <div class='divboard'>
      <ul>
        {boardItem}
        <Boardcreate create={this.newBoard.bind(this)} />
      </ul>
    </div>
  }
}
