import React from 'react'


class Circle extends React.Component {
  constructor(props){
    super(props);
      this.state = {
          color: 'white',
          turn: this.props.turn
      }

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
      <div style={circleStyle} >
  </div>
    )
  }


}



export default Circle