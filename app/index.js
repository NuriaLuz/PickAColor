import React from 'react';
import ReactDOM from 'react-dom';

const Color = (props) => {
  const color = props.color
  const selectColor = props.selectColor
  return (
    <div className = {color}  onClick= {() => selectColor(color)}
    />
  )
}

class Picker extends React.Component {
  constructor(){
    super()
    this.state = {
      selectedColor: 'red'
    }
    this.selectColor = this.selectColor.bind(this)
  }
  selectColor(colorName){
    this.setState({selectedColor:colorName})
  }
    render() {
    return (
      <div id="container">
        <div id="navbar">
          <div>Currently selected: </div>
          <div className={this.state.selectedColor}>{this.state.selectedColor}</div>
        </div>
        <div id="colors-list">
          <Color color = 'red' selectColor={this.selectColor}/>
          <Color color = 'yellow' selectColor={this.selectColor}/>
          <Color color = 'green' selectColor={this.selectColor}/>
          <Color color = 'orange' selectColor={this.selectColor}/>
          <Color color = 'blue'selectColor={this.selectColor}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Picker />,
  document.getElementById('app')
);
