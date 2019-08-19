import React, {Component} from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {
  constructor() {
    super();
    this.people = [
        {
            name: "Veronica Mize",
            dob: "11/29/2011"
        }, {
            name: "Cecilia Olsson",
            dob: "09/16/1992"
        }, {
            name: "Peter Parker",
            dob: "01/16/1992"
        }, {
            name: "Jimmy Shergil",
            dob: "12/12/2001"
        }, {
            name: "Alexander Alfred",
            dob: "02/09/1891"
        }, {
            name: "Janice Shroyer",
            dob: "12/01/1982"
        }, {
            name: "Ralph White",
            dob: "11/30/2011"
        }, {
            name: "Deborah T. Decker",
            dob: "10/31/1999"
        }
    ];

    this.state={
      isNameClicked: false,
      isAgeClicked: false,
    };
  }

  handleClick = () =>{
    this.setState({
      isNameClicked: !this.isNameClicked
    })
  }

  render() {
    const { isNameClicked } = this.state;
    const sorted = this.people.sort((a,b) => {
      const isReversed = (isNameClicked === "true") ? 1 : -1;
      return isReversed * a.name.localeCompare(b.name);
      
    })

    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter isClicked={this.handleClick}></Filter>
        <RecordTable data={sorted}></RecordTable>
      </div>
    );
  }
}

export default App;
