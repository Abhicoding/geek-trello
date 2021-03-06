import React, { Component } from 'react'

import './board.css'

export default class Board extends Component {
  constructor (props) { // Here props need to be array object of boards
    super()
    this.state = {
      board: props.board
    }
  }
  render () {
    return <div className='boards'>
      <button className='boardbutton'>
        {this.state.board}
      </button>
    </div>
  }
}
