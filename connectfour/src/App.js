import React from 'react';
import Column from './components/column.jsx'

let turn = 'red'

const headStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  backgroundColor: 'white'
}

const boardStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '80%',
  height: '75%',
  backgroundColor: 'grey',

};

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      turn: 'red'
    }

    this.boardClick = this.boardClick.bind(this)

  }

  boardClick() {
    if(this.state.turn === 'red'){
      this.setState({
        turn: 'blue'
      })
    } else {
      this.setState({
        turn: 'red'
      })
    }
  }


  render() {

  return (
    <div className='Head' style={headStyle}>
      Instructions: Click the column to place a token. <br/>
      Turn:

    <div className="App" style={boardStyle}>
      <div>
      <Column row={0} turn={this.state.turn}/>
      </div>
      <div>
      <Column row={1} turn={this.state.turn}/>
      </div>
      <div>
      <Column row={2} turn={this.state.turn}/>
      </div>
      <div>
      <Column row={3} turn={this.state.turn}/>
      </div>
      <div>
      <Column row={4} turn={this.state.turn}/>
      </div>
      <div>
      <Column row={5} turn={this.state.turn}/>
      </div>
      <div>
      <Column row={6} turn={this.state.turn}/>
      </div>

    </div>
  </div>
  )};
}

export default App;
