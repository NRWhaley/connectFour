import React from 'react';
import Circle from './circle.jsx'



class Column extends React.Component{





      render(){
      return (
        <div align="center">
        <div>
          <Circle col={0} row={this.props.row} turn={this.props.turn}/>
        </div>
        <div>
          <Circle col={1} row={this.props.row} turn={this.props.turn}/>
        </div>
        <div>
          <Circle col={2} row={this.props.row} turn={this.props.turn}/>
        </div>
        <div>
          <Circle col={3} row={this.props.row} turn={this.props.turn}/>
        </div>
        <div>
          <Circle col={4} row={this.props.row} turn={this.props.turn}/>
        </div>
        <div>
          <Circle col={5} row={this.props.row} turn={this.props.turn}/>
        </div>
        <button onClick={this.handleClick}>Place</button>
        </div>

      )}


}


export default Column;