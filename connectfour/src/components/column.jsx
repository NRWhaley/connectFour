import React from 'react';
import Circle from './circle.jsx'



class Column extends React.Component{



    handleClick(){
      console.log('hi')
    }

      render(){
      return (
        <div>
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
        </div>

      )}


}


export default Column;