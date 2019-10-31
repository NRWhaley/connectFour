import React from 'react'


class Circle extends React.Component {
  constructor(props){
    super(props);
      this.state = {
          color: 'white',
          col: this.props.col,
          row: this.props.row
      }
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ color: this.props.turn})
    console.log(this.state.col + ' ' + this.state.row + ' ' + this.props.turn)
  }

  render() {
    const circleStyle = {
      padding:10,
      margin:15,
      display:"inline-block",
      backgroundColor: this.state.color,
      borderRadius: "50%",
      width:75,
      height:75,
    };


    return (
      <div style={circleStyle} onClick={this.handleClick}>
  </div>
    )
  }


}



export default Circle