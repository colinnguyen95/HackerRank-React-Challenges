import React, {Component} from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedId: 0 
    };

    // this.state={
    //   isNameClicked: 'name',
    //   isAgeClicked: 'age',
    // }; 
  }

  changeHandler = id => {
    this.setState({
      selectedId: id
    });
  };

  // handleNameClick = () =>{
  //   this.setState({
  //     isNameClicked: !this.state.isNameClicked,
  //     // isAgeClicked: !this.state.isAgeClicked,
  //   })
  // }

  // handleAgeClick = () =>{
  //   this.setState({
  //     isNameClicked: !this.state.isNameClicked,
  //     isAgeClicked: !this.state.isAgeClicked,
  //   })
  // }

  render() {
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter 
          // key={rowData.id}
          id={this.state.isAgeClicked}
          selectedId={this.state.selectedId}
          // rowData={rowData}
          onSelect={this.changeHandler}
          // onNameClick={this.handleNameClick} 
          // onAgeClick={this.handleAgeClick} 
          // isNameChecked={this.state.isNameClicked} 
          // isAgeChecked={this.state.isAgeClicked}
        >
        </Filter>
        <RecordTable 
          id={this.state.selectedId}
          // age={this.state.isAgeClicked} 
          // name={this.state.isNameClicked}
        >
        </RecordTable>
      </div>
    );
  }
}

export default App;
