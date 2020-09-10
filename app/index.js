import React from 'react';
import ReactDOM from 'react-dom';

const Color = (props) => {
  return (
    <div className = {props.color} />
  )
}

class Picker extends React.Component {
  render() {
    return (
      <div id="container">
        <div id="navbar">
          <div>Currently selected: </div>
          <div className="red">Red</div>
        </div>
        <div id="colors-list">
          <Color color = 'red' />
          <Color color = 'yellow' />
          <Color color = 'green' />
          <Color color = 'orange' />
          <Color color = 'blue'/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Picker />,
  document.getElementById('app')
);
