import React from 'react'


class Circle extends React.Component {
  constructor(props){
    super(props);
      this.state = {
          color: 'blue',
          x: 0,
          y: 0
      }
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ color: 'red'})
    console.log(this.state.x + ' ' + this.state.y)
  }

  render() {
    const circleStyle = {
      padding:10,
      margin:20,
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