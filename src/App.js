import React, {Component} from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {
  constructor() {
    super();

    this.state={
      isNameClicked: true,
      isAgeClicked: false,
    };
  }

  handleClick = () =>{
    this.setState({
      isNameClicked: !this.state.isNameClicked,
      isAgeClicked: !this.state.isAgeClicked,
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter onClick={this.handleClick} isNameChecked={this.state.isNameClicked} isAgeChecked={this.state.isAgeClicked}></Filter>
        <RecordTable age={this.state.isAgeClicked} name={this.state.isNameClicked}></RecordTable>
      </div>
    );
  }
}

export default App;
