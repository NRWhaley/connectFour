import React from 'react';
import Column from './components/column.jsx'

const boardStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '80%',
  height: '75%',
  backgroundColor: 'grey',

};

function App() {

  return (
    <div className="App" style={boardStyle}>
      <div>
      <Column row={0}/>
      </div>
      <div>
      <Column row={1}/>
      </div>
      <div>
      <Column row={2}/>
      </div>
      <div>
      <Column row={3}/>
      </div>
      <div>
      <Column row={4}/>
      </div>
      <div>
      <Column row={5}/>
      </div>
      <div>
      <Column row={6}/>
      </div>

    </div>
  );
}

export default App;
