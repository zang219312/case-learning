import React, { Component } from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import PropTypes from 'prop-types';

//受控组件
/*class Square extends Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >{this.props.value}</button>
    );
  }
}*/

function Square(props) {
  return (<button
    className="square"
    onClick={props.onClick}
  >{props.value}</button>)
}

class Board extends Component {
  renderSquare(i) {
    return <Square key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>
  }

  render() {
    const rows = Array(3).fill(null)
    const columns = Array(3).fill(null)
    const boardItem = rows.map((row, x) => {
      return <div className="board-row" key={x}>
        {columns.map((_, y) => {
          return this.renderSquare(3 * x + y)
        })}
      </div>
    })
    return (<div className="board-wrap">
      <div className="row">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>

      {boardItem}

      <div className="column">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>

    </div>)
  }
}

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      history: [{
        squares: Array(9).fill(null), x: null, y: null
      }], xIsNext: true, stepNumber: 0
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    const x = i % 3 + 1
    const y = 3 - Math.floor(i / 3)
    console.log(i, [x, y])
    if (calculateWinner(squares) || squares[i]) {
      return
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O'

    this.setState({
      history: history.concat([{
        squares
      }]), xIsNext: !this.state.xIsNext, stepNumber: history.length
    })

  }

  jumpTo(step) {
    this.setState({
      stepNumber: step, xIsNext: (step % 2) === 0
    })
  }

  // *todo 1.在游戏历史记录列表显示每一步棋的坐标(coord)，格式为 (列号, 行号)。
  // todo 2.在历史记录列表中加粗显示当前选择的项目
  // todo 3.使用两个循环来渲染出棋盘的格子，而不是在代码里写死
  // todo 4.添加一个可以升序或降序显示历史记录的按钮
  // todo 5.每当有人获胜时，高亮显示连成一线的 3 颗棋子
  // todo 6.当无人获胜时，显示一个平局的消息
  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares)

    const moves = history.map((step, move) => {
      const desc = move ? `go to move # ${move} (列，行)` : 'go to game start'
      return <li key={move}>
        <button onClick={() => this.jumpTo(move)}>{desc}</button>
      </li>
    })

    let status = ''
    if (winner) {
      status = `Winner: ${winner}`
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i) => this.handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  }
}

document.title = 'Tic Tac Toe'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Game/>)

/**
 * 判断出获胜者，并根据情况返回 “X”，“O” 或 “null”
 * @param squares
 * @returns {null|*}
 */
function calculateWinner(squares) {
  // 三个一行的情况
  const lines = [[0, 1, 2], // ---
    [3, 4, 5], // ---
    [6, 7, 8], // ---
    [0, 3, 6], // |
    [1, 4, 7], // |
    [2, 5, 8], // |
    [0, 4, 8], // /
    [2, 4, 6]  // \
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function getCoordinates() {
  const coordsMap = {}
}
