import React from 'react'



class Game extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        winner: false,
        board: [
          ['white','white','white','white','white','white','white'],
          ['white','white','white','white','white','white','white'],
          ['white','white','white','white','white','white','white'],
          ['white','white','white','white','white','white','white'],
          ['white','white','white','white','white','white','white'],
          ['white','white','white','white','white','white','white']
        ]
      }

  }


//checkWinner()



render() {
    if(this.state.winner){
  return(
    <div>
    Congratulations!
    </div>
  )}  else {
    return (
      <div>
        Good luck
      </div>
    )
  }
}

}

export default Game;